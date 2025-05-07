import { AuthorService } from '../services/Author/author.service.js';
import ResponseHelper from '../utils/responseHelper.js';

export const addAuthors = async (req, res, next) => {
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
};
export const getAuthors = async (req, res, next) => {
    try {
        const {page, limit} = req.query;
        const authors = await AuthorService.getAuthors({page, limit});
        return ResponseHelper.success(res, 'Authors fetched successfully!', authors, 200);
    } catch (error) {
        next(error);
    }
};
export const getAuthorById = async (req, res, next) => {};
export const deleteAuthor = async (req, res, next) => {};
export const updateAuthors = async (req, res, next) => {}