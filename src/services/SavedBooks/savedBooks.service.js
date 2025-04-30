import { UserCollections } from "../../models/userCollections";

export const SavedBooksService = {

getSavedBooks: async (userId) => {
    try{
        const savedBooks = await UserCollections.find({ userId, collectionType: 'saved' }).populate('targetId', 'title author img');
        if (!savedBooks) {
            throw new Error('No saved books found for this user.');
        }
        return savedBooks.map((book) => new bookFavouriteDto(book.bookId));
    } catch (error) {
        throw new Error('Error retrieving saved books: ' + error.message);
    }
},
addSavedBooks: async (userId, bookId) => {
    try {
        const savedBook = await UserCollections.create({ userId, targetId: bookId, targetType: 'Book', collectionType: 'saved' });
        return savedBook;
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
        return removedBook;
    } catch (error) {
        throw new Error('Error removing saved book: ' + error.message);
    }   
},

};