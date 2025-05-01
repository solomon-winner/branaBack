import { RecomendedBooksService } from "../services/RecommededBooks/recommendedBooks.service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const getWishList = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const wishList = await RecomendedBooksService.getWishList(userId);
        return ResponseHelper.success(res, 'Wish list retrieved successfully', wishList, 200);
    } catch (error) {
        next(error);
    }
}

export const addWishList = async (req, res, next) => {
    try {
        const { userId, bookId, price } = req.body;
        const wishList = await RecomendedBooksService.addWishList(userId, bookId, price);
        return ResponseHelper.success(res, 'Book added to wish list successfully', wishList, 201);
    } catch (error) {
        next(error);
    }
}

export const removeWishList = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;
        const removedBook = await RecomendedBooksService.removeWishList(userId, bookId);
        return ResponseHelper.success(res, 'Book removed from wish list successfully', removedBook, 200);
    } catch (error) {
        next(error);
    }
}

