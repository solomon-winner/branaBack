import { AuthorDTOForUser } from "../../DTOS/Author/authorForUser.dto.js";
import { Author } from "../../models/authors.js";

export const AuthorService = {
    addAuthors: async (AuthorData) => {
        try {
            const author = new Author(AuthorData);
            await author.save();
            return new AuthorDTOForUser(author);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },

    getAuthors: async (page = 1, limit = 10) => {
        try {
            const skip = (page - 1) * limit;
            const authors = await Author.find().skip(skip).limit(limit);
            if (!authors) {
                throw new Error('Authors not found');
            }
            return authors.map((author) => new AuthorDTOForUser(author));
            
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },
    getAuthorById: async (id) => {
        try {
            const author = await Author.findById(id).select('-__v -createdAt -updatedAt');
            if (!author) {
                 throw new Error('Author not found');
            }
            return new AuthorDTOForUser(author);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    },

    updateAuthors: async (id,updatedData) => {
        try {

            const author = await Author.findByIdAndUpdate(id, updatedData, { new: true });
            if (!author) {
                throw new Error('Author not found');
            }
            return new AuthorDTOForUser(author);
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
            return new AuthorDTOForUser(author);
        } catch (error) {
            console.error('Error adding author:', error);
            throw new Error('Error adding author: ' + error.message);
        }
    }
}