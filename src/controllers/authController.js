import { UserDTOForUser } from '../DTOS/userDTO/userdtoForUser.dto.js';
import { AuthService } from '../services/authentication/auth.service.js';
import { generateRefreshToken, generateToken } from '../services/TokenService/tokenGenerater.service.js';
import ResponseHelper from '../utils/responseHelper.js';

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return ResponseHelper.error(res, 'Email and password are required', [], 400);
          }

        const user = await AuthService.checkExistingUser(email);
        
        if (!user) {
            return ResponseHelper.error(res, 'Invalid Credentials!', [], 404);
        }

        const isPasswordMatch = await AuthService.comparePassword(password, user.password);
        
        if (!isPasswordMatch) {
            return ResponseHelper.error(res, 'Invalid password', [], 400);
        }

        const accessToken = generateToken(user);
        const refreshToken = generateRefreshToken();
        
        await TokenService.storeRefreshToken({
            userId: user.id,
            tokenHash: hashToken(refreshToken), 
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            userAgent: req.get('User-Agent'),
            ipAddress: req.ip
          });
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Lax', 
            maxAge: 15 * 60 * 1000 
          });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 
          });

        ResponseHelper.success(res, 'Login successful', { token, user: new UserDTOForUser(user) }, 200);
    } catch (error) {
        next(error);
    }
}

export const register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, phoneNo, altPhoneNo } = req.body;

    const isUserExists = await AuthService.checkExistingUser(email);  
    
    if (isUserExists) {
        return ResponseHelper.error(res, 'User already exists', [], 400);
    }

    const user = await AuthService.createUser({
        firstName,
        lastName,
        email,
        password,
        phoneNo,
        altPhoneNo
    });

    if (!user) {
        return ResponseHelper.error(res, 'User creation failed', [], 500);
    }
    
    ResponseHelper.success(res, 'User Registered successfully', new UserDTOForUser(user), 201);

    } catch (error) {
        next(error);
    }

    
}