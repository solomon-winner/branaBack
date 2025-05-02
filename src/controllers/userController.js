import { UserService } from "../services/User/user.service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const getUsers = async( req, res, next) => {
    try {
        const {page, limit, role} = req.query;
        const users = await UserService.getUsers(page, limit, role);
        return ResponseHelper.success(res, 'Users retrieved successfully', users, 200);
    } catch (error) {
        next(error);
    }
}
export const getAUserById  = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await UserService.getUser(userId);
        return ResponseHelper.success(res, 'User retrieved successfully', user, 200);
    } catch (error) {
        next(error);
    }
}

export const addUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await UserService.addUser(userData);
        return ResponseHelper.success(res, 'User added successfully', newUser, 201);
    } catch (error) {
        next(error);
    }
}
export const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const updatedData = req.body;
        const updatedUser = await UserService.updateUser(userId, updatedData);
        return ResponseHelper.success(res, 'User updated successfully', updatedUser, 200);
    } catch (error) {
        next(error);
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
         await UserService.deleteUser(userId);
        return ResponseHelper.success(res, 'User deleted successfully', null, 200);
    } catch (error) {
        next(error);
    }
}