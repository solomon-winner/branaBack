export const AuthMiddleware = async (req, res, next) => {
    try {
      
      const token = req.cookies.accessToken || req.header('Authorization')?.replace('Bearer ', '');
      
      if (!token) {
        return ResponseHelper.error(res, 'Authentication required', [], 401);
      }
  
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
  
      
      const isRevoked = await TokenService.isAccessTokenRevoked(decoded.jti);
      if (isRevoked) {
        return ResponseHelper.error(res, 'Token revoked', [], 401);
      }
  
     
      const user = await UserService.getUserById(decoded.sub);
      if (!user) {
        return ResponseHelper.error(res, 'User not found', [], 404);
      }
  
      req.user = user;
      next();
    } catch (error) {
      
     next(error);
    }
  };