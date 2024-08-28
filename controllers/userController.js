import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
    try {
    const users = await User.find({});
    return res.status(200).json(users)
} catch (error) {
    res.status(500).json({error: 'Internal Server Error!'})
}
}
export const getUser = (req,res) => {}
export const updateUser = (req,res) => {}