import { UserService } from "../services/User/user.service.js";

export const getUsers = async( req, res, next) => {
    try {
        const {page, limit, role} = req.query;
        const users = await UserService.getUsers(page, limit, role);
        return ResponseHelper.success(res, 'Users retrieved successfully', users, 200);
    } catch (error) {
        next(error);
    }
}
export const getAUserById  = async (req, res, next) => {}
export const addUser = async (req, res, next) => {}
export const updateUser = async (req, res, next) => {}
export const deleteUser = async (req, res, next) => {}