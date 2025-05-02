import { User } from "../../models/user";

export const UserService = {
    addUser: async (userData) => {
        try {
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            console.error("Failed to add user:", error.message);
            throw new Error('Failed to add user');
        }
    },
    getUser: async (id) => {
        try {
            
            const response = await User.findById(id).select("-__v -password");
            if (!response) throw new Error('User not found');
            return response;
          } catch (error) {
            console.error(`Failed to fetch user ${id}:`, error);
            throw new Error(error.message || 'Failed to fetch user');
          }
    },
    getUsers: async (page = 1, limit = 10, role) => {
        try {
          const skip = (page - 1) * limit;
          const filter = role ? {role}: {};
          const metaData = await getPagination(page, limit, User, filter);
          const users = await User.find(filter)
          .skip(skip)
          .limit(limit)
          .select("-__v -password")
          .lean();
          
            return {metaData, users};
        } catch (error) {
            console.error(`Failed to fetch users:`, error.message);
            throw new Error('Failed to fetch users');
        }
    },
    updateUser: async (id, updatedData) => {
        try {
        
              if (!updatedData || Object.keys(updatedData).length === 0) {
                throw new Error("No update data provided");
              }
        
              const protectedFields = ["_id", "createdAt", "password"];
              protectedFields.forEach((field) => delete updatedData[field]);
        
            const updatedUser = await User.findByIdAndUpdate(
                id, 
                updatedData, { 
                    new: true, 
                    runValidators: true, 
                    context: "query"
                  }).select("-__v -password");

                  if (!updatedUser) {
                    throw new Error("User not found");
                }
            return updatedUser;
          } catch (error) {
            console.error(`Failed to update user ${id}:`, error.message);
            throw new Error('Failed to update user');
          }
    },
    deleteUser: async (id) => {
        try {
            const deletedUser = await User.findByIdAndDelete(id).select("-__v -password");
            if (!deletedUser) throw new Error('User not found');
            return deletedUser;
        } catch (error) {
            console.error(`Failed to delete user ${id}:`, error.message);
            throw new Error('Failed to delete user');
        }
    }
    
}