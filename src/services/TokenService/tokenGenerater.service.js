import jwt from 'jsonwebtoken';
import crypto from 'crypto';

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  throw new Error('Invalid JWT_SECRET - must be at least 32 characters');
}

export const generateToken = (user) => {
  const token = jwt.sign(
    {
      
      sub: user.user_id, 
      iat: Math.floor(Date.now() / 1000), 
      aud: 'Beana Application', 
      iss: 'Brana Server', 
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '15m', 
      algorithm: 'HS256',
      header: {
        typ: 'JWT',
        kid: 'v1'
      }
    }
  );

  return token;
};


export const generateRefreshToken = () => {
  return crypto.randomBytes(40).toString('hex');
};