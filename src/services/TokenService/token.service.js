import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import RefreshToken from '../../models/refreshToken.js';

export const TokenService = {
  
  validateSecrets: () => {
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
      throw new Error('Invalid JWT_SECRET - must be at least 32 characters');
    }
  },

  generateAccessToken: (user) => {
    try {
      if (!user?._id) throw new Error('Invalid user object');
      const jti = crypto.randomUUID();
      const token = jwt.sign(
        {
          sub: user._id,
          jti,
          aud: 'Brana Application',
          iss: 'Brana Server',
          iat: Math.floor(Date.now() / 1000),
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '15m',
          algorithm: 'HS256',
          header: { typ: 'JWT', kid: 'v1' }
        }
      );

      return {token, jti}
    } catch (error) {
      console.error('Token generation failed:', error);
      throw new Error('Failed to generate access token');
    }
  },

  generateAndStoreRefreshToken: async (user, ipAddress, userAgent, accessTokenJti) => {
    try {
      if (!user?._id) throw new Error('Invalid user object');
      
      const refreshToken = crypto.randomBytes(64).toString('hex');
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      const tokenHash = crypto
        .createHash('sha256')
        .update(refreshToken)
        .digest('hex');

      await RefreshToken.create({
        userId: user._id,
        tokenHash,
        accessTokenJti,
        expiresAt,
        ipAddress,
        userAgent
      });

      return refreshToken;
    } catch (error) {
      console.error('Refresh token storage failed:', error);
      throw new Error('Failed to generate refresh token');
    }
  },

  verifyAccessToken: async (token) => {
    try {
      if (!token) throw new Error('No token provided');
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
      
      const isRevoked = await RefreshToken.exists({ 
        accessTokenJti: decoded.jti, 
        revoked: true 
      });

      if (isRevoked) throw new Error('Token revoked');
      
      return decoded;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Token expired');
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid token');
      }
      
      throw new Error('Authentication failed');
    }
  },

  validateRefreshToken: async (token, user) => {
    try {
      if (!token || !user?._id) throw new Error('Invalid parameters');
      
      const tokenHash = this.hashToken(token);
      
      const refreshToken = await RefreshToken.findOne({
        tokenHash,
        user: user._id,
        revoked: false,
        expiresAt: { $gt: new Date() }
      });

      if (!refreshToken) throw new Error('Invalid refresh token');
      return refreshToken;
    } catch (error) {
      console.error('Refresh token validation failed:', error);
      throw new Error('Refresh token validation failed');
    }
  },

  
  revokeToken: async (jti) => {
    try {
      if (!jti) throw new Error('Missing token identifier');
      
      await RefreshToken.findOneAndUpdate(
        { tokenHash: this.hashToken(jti) },
        { $set: { revoked: true } }
      );
    } catch (error) {
      console.error('Token revocation failed:', error);
      throw new Error('Failed to revoke token');
    }
  },

  revokeAllTokensForUser: async (userId) => {
    try {
      if (!userId) throw new Error('Invalid user ID');
      
      const result = await RefreshToken.updateMany(
        { user: userId },
        { $set: { revoked: true } }
      );
      
      if (result.modifiedCount === 0) {
        throw new Error('No tokens found for user');
      }
    } catch (error) {
      console.error('Bulk token revocation failed:', error);
      throw new Error('Failed to revoke all tokens');
    }
  },

  // Utility function with validation
  hashToken: (token) => {
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid token input for hashing');
    }
    
    return crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');
  }
};