import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
    try {
    const users = await User.find({});
    return res.status(200).json(users)
} catch (error) {
    res.status(500).json({error: 'Internal Server Error!'})
}
}
export const getUser = (req,res) => {
    try {
        const {id} = req.params;
    } catch (error) {
        
    }
}
export const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
    const {
        firstName,
        lastName,
        email,
        password,
        role,
        profilePicture,
        wishList,
        phoneNo,
        altPhoneNo,
        BankAccounts,
        address,
        shelve ,
        savedBooks,
        recommendedBooks,
        Categories,
        authors 
    } = req.body;
    const UpdatedData = {
        firstName,
        lastName,
        email,
        password,
        role,
        profilePicture,
        wishList,
        phoneNo,
        altPhoneNo,
        BankAccounts,
        address,
        shelve ,
        savedBooks,
        recommendedBooks,
        Categories,
        authors
    }
    Object.keys(UpdatedData).forEach(key => {
        if (!UpdatedData[key]) {
            delete UpdatedData[key];
        }
    });
    const updatedUser = await User.findByIdAndUpdate(id, UpdatedData, {new: true});
    if (!updatedUser) {
        return res.status(404).send({error: 'User not found!'})
    }
    res.json(updatedUser);
    } catch (error) {
        
    }
}