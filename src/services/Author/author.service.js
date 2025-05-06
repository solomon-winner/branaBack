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
}