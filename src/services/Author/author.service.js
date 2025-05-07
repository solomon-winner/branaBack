import { authorFavouriteDto } from "../../DTOS/favouriteDTO/author.dto.js";
import { Author } from "../../models/authors.js";

export const AuthorService = {
    addAuthors: async (AuthorData) => {
        try {
            const author = new Author(AuthorData);
            await author.save();
            return author;
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },

    getAuthors: async () => {
        try {
            const authors = await Author.find();
            return ResponseHelper.success(res, 'Authors fetched successfully!', authors);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },
    getAuthorById: async (id) => {
        try {
            const author = await Author.findById(id);
            if (!author) {
                 throw new Error('Author not found');
            }
            return authorFavouriteDto(author);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },

    updateAuthors: async () => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const author = await Author.findByIdAndUpdate(id, { name, email }, { new: true });
            if (!author) {
                return ResponseHelper.error(res, 'Author not found', 404);
            }
            return ResponseHelper.success(res, 'Author updated successfully!', author);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },
    deleteAuthor: async (id) => {
        try {
            const author = await Author.findByIdAndDelete(id);
            if (!author) {
                throw new Error('Author not found');
            }
            return author;
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    }
}