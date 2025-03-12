export const TokenService = {
    generateToken: async (user) => {
        return user.generateAuthToken();
    },
    verifyToken: async (token) => {
        return User.findByToken(token);
    },
    generateRefreshToken: async () => {
        return User.generateRefreshToken();
    },
}