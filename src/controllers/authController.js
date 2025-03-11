import { UserDTOForUser } from '../DTOS/userDTO/userdtoForUser.dto.js';
import { AuthService } from '../services/authentication/auth.service.js';
import ResponseHelper from '../utils/responseHelper.js';

export const login = (req, res, next) => {}
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
    
    ResponseHelper.success(res, 'User Registered successfully', UserDTOForUser(user), 201);

    } catch (error) {
        next(error);
    }

    
}