import { bookFavouriteDto } from "../../DTOS/favouriteDTO/book.dto.js";
import { UserCollections } from "../../models/userCollections.js"

export const RecomendedBooksService = {
    getRecommendedBooks: async (userId) => {
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
    addRecommendedBooks: async (userId, bookId, reason) => {
        try {
            const recommendedBook = (await UserCollections.create({ userId, targetId: bookId, targetType: 'Book', collectionType: 'recommended', reason })).toObject();

            return new bookFavouriteDto(recommendedBook);
        } catch (error) {
            throw new Error('Error adding recommended book: ' + error.message);
        }
    },
    removeRecommendedBooks: async (userId, bookId) => {
        try {
            const removedBook = await UserCollections.deleteOne({ userId,
                targetId: bookId,
                targetType: 'Book',
                collectionType: 'recommended'
            });
            if (removedBook.deletedCount === 0) {
                throw new Error('No recommended book found to remove.');
            }
            return new bookFavouriteDto(removedBook);
        } catch (error) {
            throw new Error('Error removing recommended book: ' + error.message);
        }
    },
}