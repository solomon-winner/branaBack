import  { User } from '../models/user.js';
import bcrypt from 'bcryptjs';

export const login = (req, res) => {}
export const register = (req, res) => {
    const { firstName, lastName, email, password, phoneNo, altPhoneNo } = req.body;
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(password, salt);
    

    const user = new User({
        firstName,
        lastName,
        email,
        phoneNo,
        altPhoneNo
    });
}