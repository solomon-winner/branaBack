import dotenv from 'dotenv';

dotenv.config(); 

const config = {
  bcryptSaltRounds: 10, 
  jwtSecret: process.env.JWT_SECRET || '', 
  mongoURI: process.env.MONGO_URI || '', 
  serverPort: process.env.PORT || '', 
};

export default config;
