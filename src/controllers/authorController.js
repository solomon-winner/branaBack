import { AuthorService } from '../services/Author/author.service.js';
import ResponseHelper from '../utils/responseHelper.js';
import { validateQuery } from '../validation/authentication/validateQuery.js';
import { AuthorValidation, UpdateAuthorValidation } from '../validation/author/authorValidation.js';

export const addAuthors = [
    AuthorValidation,
    async (req, res, next) => {
    try {
        const { name, img, bio, birthDate, deathDate } = req.body;
        const authorData = {
            name,
            img,
            bio,
            birthDate,
            deathDate
        };
        const newAuthor = await AuthorService.addAuthors(authorData);
        return ResponseHelper.success(res, 'Author added successfully', newAuthor, 201);
    } catch (error) {
        next(error);
    }
}];
export const getAuthors = [
    validateQuery,
    async (req, res, next) => {
    try {
        const {page, limit} = req.query;
        const authors = await AuthorService.getAuthors(page, limit);
        return ResponseHelper.success(res, 'Authors fetched successfully!', authors, 200);
    } catch (error) {
        next(error);
    }
}];
export const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await AuthorService.getAuthorById(id);
        return ResponseHelper.success(res, 'Author fetched successfully!', author, 200);
    } catch (error) {
        next(error);
    }
};
export const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await AuthorService.deleteAuthor(id);
        return ResponseHelper.success(res, 'Author deleted successfully', deletedAuthor, 200);
    } catch (error) {
        next(error);
    }
};
export const updateAuthors = [
    UpdateAuthorValidation,
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedAuthor = await AuthorService.updateAuthors(id, updatedData);
        return ResponseHelper.success(res, 'Author updated successfully!', updatedAuthor, 200);
    } catch (error) {
        next(error);
    }
}]