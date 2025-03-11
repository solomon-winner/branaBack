import bcrypt from 'bcryptjs';

export const Encryptor = {
    hashPassword: async (password, saltRounds = 10) => {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    },
    comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
    }
}