import { User } from '../models/user.model.js';
import Config from '../../../config.js';
import { Encryptor } from './Encryptor.service.js';

export const AuthService = {
  checkExistingUser: async (email) => {
    return User.findOne({ email });
  },

  createUser: async (userData) => {
    const hashedPassword = await Encryptor.hashPassword(userData.password, Config.bcryptSaltRounds);

    return await User.create({
      ...userData,
      password: hashedPassword
    });
  }
};