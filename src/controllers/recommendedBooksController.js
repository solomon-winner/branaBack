import { RecomendedBooksService } from "../services/RecommededBooks/recommendedBooks.service";

export const getRecommendedBooks = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const recommendedBooks = await RecomendedBooksService.getRecommendedBooks(userId);
        return ResponseHelper.success(res, 'Recommended books retrieved successfully', recommendedBooks, 200);
    } catch (error) {
        next(error);
    }
}
export const addRecommendedBooks = async (req, res, next) => {
    try {
        const { userId, bookId, reason } = req.body;
        const recommendedBook = await RecomendedBooksService.addRecommendedBooks(userId, bookId, reason);
        return ResponseHelper.success(res, 'Recommended book added successfully', recommendedBook, 201);
    } catch (error) {
        next(error);
    }
}
export const removeRecommendedBooks = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;
        const removedBook = await RecomendedBooksService.removeRecommendedBooks(userId, bookId);
        return ResponseHelper.success(res, 'Recommended book removed successfully', removedBook, 200);
    } catch (error) {
        next(error);
    }
}