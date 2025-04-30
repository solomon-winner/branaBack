import { UserCollections } from "../../models/userCollections"

export const RecomendedBooksService = {
    getRecomendedBooks: async (userId) => {
        try{
        const result = await UserCollections.find({ userId, collectionType: 'recommended' }).populate('targetId', 'title author img');
        if (!result) {
            throw new Error('No recommended books found for this user.');
        }
        return result.map((book) => new bookFavouriteDto(book.bookId));
        }catch (error) {
            throw new Error('Error retrieving recommended books: ' + error.message);
        }
       
    },
    addRecomendedBooks: async (userId, bookId, reason) => {
        try {
            const recommendedBook = await UserCollections.create({ userId, targetId: bookId, targetType: 'Book', collectionType: 'recommended', reason });
            return recommendedBook;
        } catch (error) {
            throw new Error('Error adding recommended book: ' + error.message);
        }
    },
    removeRecomendedBooks: async (userId, bookId) => {
        try {
            const removedBook = await UserCollections.deleteOne({ userId,
                targetId: bookId,
                targetType: 'Book',
                collectionType: 'recommended'
            });
            if (removedBook.deletedCount === 0) {
                throw new Error('No recommended book found to remove.');
            }
            return removedBook;
        } catch (error) {
            throw new Error('Error removing recommended book: ' + error.message);
        }
    },
}