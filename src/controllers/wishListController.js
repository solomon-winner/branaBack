import { validate } from "express-validation";
import { wishListService } from "../services/WishList/wishList.service.js";
import ResponseHelper from "../utils/responseHelper.js";
import { validateId } from "../validation/authentication/validateId.js";

export const getWishList =[
    validateId,
    async (req, res, next) => {
    try {
        const { userId } = req.params;
        const wishList = await wishListService.getWishList(userId);
        return ResponseHelper.success(res, 'Wish list retrieved successfully', wishList, 200);
    } catch (error) {
        next(error);
    }
}]

export const addWishList = [
    validateId,
    async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;
        const wishList = await wishListService.addWishList(userId, bookId);
        return ResponseHelper.success(res, 'Book added to wish list successfully', wishList, 201);
    } catch (error) {
        next(error);
    }
}]

export const removeWishList = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;
        const removedBook = await wishListService.removeWishList(userId, bookId);
        return ResponseHelper.success(res, 'Book removed from wish list successfully', removedBook, 200);
    } catch (error) {
        next(error);
    }
}

