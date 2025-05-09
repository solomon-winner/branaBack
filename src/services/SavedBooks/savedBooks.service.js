import { UserCollections } from "../../models/userCollections.js";
import { bookFavouriteDto } from "../../DTOS/favouriteDTO/book.dto.js";
import { Book } from "../../models/book.js";

export const SavedBooksService = {
    
getSavedBooks: async (userId) => {
    try{
        const savedBooks = await UserCollections.find({ userId, collectionType: 'saved' }).populate('targetId', 'title author img').select("-__v").lean();
        if (!savedBooks) {
            throw new Error('No saved books found for this user.');
        }
        return savedBooks.map((book) => new bookFavouriteDto(book));
    } catch (error) {
        throw new Error('Error retrieving saved books: ' + error.message);
    }
},
addSavedBooks: async (userId, bookId) => {
    try {
        const book = await Book.findById(bookId).select("title img author").lean();
        
        if (!book) {
        throw new Error("Book not found");
        }
        const savedBook = await UserCollections.create({ userId, targetId: bookId, targetType: 'Book', collectionType: 'saved' });
        const plainsavedBook = savedBook.toObject();
        plainsavedBook.targetId = book;
        return new bookFavouriteDto(plainsavedBook);
    } catch (error) {
        throw new Error('Error adding saved book: ' + error.message);
    }
},

removeSavedBooks: async (userId, bookId) => {
    try {
        const removedBook = await UserCollections.deleteOne({ userId, targetId: bookId, targetType: 'Book', collectionType: 'saved' });
        if (removedBook.deletedCount === 0) {
            throw new Error('No saved book found to remove.');
        }
        return;
    } catch (error) {
        throw new Error('Error removing saved book: ' + error.message);
    }   
 },

};