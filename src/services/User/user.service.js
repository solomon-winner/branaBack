import { User } from "../../models/user";

export const UserService = {
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
    getUsers: async () => {
        try {
            const users = await User.find({}).select("-__v -password").lean();
            return users;
        } catch (error) {
            console.error(`Failed to fetch users:`, error);
            throw new Error(error.message || 'Failed to fetch users');
        }
    },
    updateUser: async (id, updatedData) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("Invalid user ID format");
              }
        
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
            return updatedUser;
          } catch (error) {
            console.error(`Failed to update user ${id}:`, error);
            throw new Error(error.message || 'Failed to update user');
          }
    }
    
}