import { RecomendedBooksService } from "../services/RecommededBooks/recommendedBooks.service.js";
import ResponseHelper from "../utils/responseHelper.js";
import { validateRecommendedBook } from "../validation/recommendedBooks/recommendedBookValidator.js";

export const getRecommendedBooks = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const recommendedBooks = await RecomendedBooksService.getRecommendedBooks(userId);
        return ResponseHelper.success(res, 'Recommended books retrieved successfully', recommendedBooks, 200);
    } catch (error) {
        next(error);
    }
}
export const addRecommendedBooks = [
    validateRecommendedBook,
    async (req, res, next) => {
    try {
        const { userId, bookId } = req.query;
        const { reason } = req.body;
        const recommendedBook = await RecomendedBooksService.addRecommendedBooks(userId, bookId, reason);
        return ResponseHelper.success(res, 'Recommended book added successfully', recommendedBook, 201);
    } catch (error) {
        next(error);
    }
}]
export const removeRecommendedBooks = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { bookId } = req.body;
        const removedBook = await RecomendedBooksService.removeRecommendedBooks(id, bookId);
        return ResponseHelper.success(res, 'Recommended book removed successfully', removedBook, 200);
    } catch (error) {
        next(error);
    }
}