import { User } from "../models/user.js"

export const getUser = async (req, res) => {
    try {
    const users = await User.find({});
    return res.status(200).json(users)
} catch (error) {
    res.status(500).json({error: 'Internal Server Error!'})
}
}
export const updateUser = (req,res) => {}