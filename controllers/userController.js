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
        phoneNo,
        altPhoneNo
    }

    Object.keys(UpdatedData).forEach(key => {
        if (!UpdatedData[key]) {
            delete UpdatedData[key];
        }
    });
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).send({error: 'User not found!'})
    }

    if (wishList) user.wishList.push(...wishList);
    if (BankAccounts) user.BankAccounts.push(...BankAccounts);
    if (shelve) user.shelve.push(...shelve);
    if (savedBooks) user.savedBooks.push(...savedBooks);
    if (recommendedBooks) user.recommendedBooks.push(...recommendedBooks);
    if (Categories) user.Categories.push(...Categories);
    if (authors) user.authors.push(...authors);

     Object.assign(user, UpdatedData);

    const updatedUser = await User.save();
    if (!updatedUser) {
        return res.status(404).send({error: 'User not found!'})
    }
    res.json(updatedUser);
    } catch (error) {
        
    }
}