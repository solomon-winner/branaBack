import { SavedBooksService } from "../services/SavedBooks/savedBooks.service.js";

export const getSavedBooks = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const savedBooks = await SavedBooksService.getSavedBooks(userId);
        return ResponseHelper.success(res, 'Saved books retrieved successfully', savedBooks, 200);
    } catch (error) {
        next(error);
        
    }
}
export const addSavedBooks = async (req, res, next) => {
    try {
        const { userId, bookId } = req.body;
        const savedBook = await SavedBooksService.addSavedBooks(userId, bookId);
        return ResponseHelper.success(res, 'Saved book added successfully', savedBook, 201);
    } catch (error) {
        next(error);
    }
}
export const removeSavedBooks = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { bookId } = req.body;
        await SavedBooksService.removeSavedBooks(userId, bookId);
        return ResponseHelper.success(res, 'Saved book removed successfully', null, 200);
    } catch (error) {
        next(error);
    }
}