import  { User } from '../models/user.js';
import { Encryptor } from '../services/authentication/Encryptor.service.js';

export const login = (req, res) => {}
export const register = (req, res) => {
    const { firstName, lastName, email, password, phoneNo, altPhoneNo } = req.body;

    const hashedPassword = Encryptor.hashPassword(password);
    
}