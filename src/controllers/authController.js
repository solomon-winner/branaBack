import { UserDTOForUser } from '../DTOS/userDTO/userdtoForUser.dto.js';
import { AuthService } from '../services/authentication/auth.service.js';
import { Encryptor } from '../services/authentication/Encryptor.service.js';
import { TokenService } from '../services/TokenService/token.service.js';
import ResponseHelper from '../utils/responseHelper.js';
import { validateRegister } from '../validation/aurhentication/auth.validation.js';

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
        
        const isPasswordMatch = await Encryptor.comparePassword(password, user.password);
        
        if (!isPasswordMatch) {
            return ResponseHelper.error(res, 'Invalid Credentials', [], 400);
        }

        const accessToken = TokenService.generateAccessToken(user);
        const refreshToken = await TokenService.generateAndStoreRefreshToken(
            user,
            req.ip,
            req.get('User-Agent')
          );

        // res.cookie('accessToken', accessToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'Lax', 
        //     maxAge: 15 * 60 * 1000 
        //   });

        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'Strict',
        //     maxAge: 7 * 24 * 60 * 60 * 1000 
        //   });

        ResponseHelper.success(res, 'Login successful', {user: new UserDTOForUser(user),accessToken, refreshToken,} , 200);
    } catch (error) {
        next(error);
    }
}

export const register = [
    validateRegister,
    async (req, res, next) => {
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

}]