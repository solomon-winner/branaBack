import { bookFavouriteDto } from "../../DTOS/favouriteDTO/book.dto.js";
import { Book } from "../../models/book.js";
import { UserCollections } from "../../models/userCollections.js";

export const FavouriteService = {
    addFavouriteAuthor: async (userId, authorId) => {
        try {
            const favourite = (await UserCollections.create({ userId, targetId: authorId, targetType: "Author" ,collectionType: "favourite"})).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite author");
        }
    },
    getFavouriteAuthor: async (userId) => {
        try {
            const favourites = await UserCollections.find({userId , targetType: 'Author', collectionType: 'favourite'}).populate('targetId', 'name img').select( '-__v' ).lean();
            return favourites;
        
        } catch (error) {
            throw new Error("Error fetching favourite authors");
        }
    },
    removeFavouriteAuthor: async (userId, authorId) => {
        try {
            const favourite = await UserCollections.deleteOne({ userId, targetId: authorId, targetType: "Author", collectionType: "favourite"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite author");
        }
    },
    getFavouriteBook: async (userId) => {
        try {
            const favourites = await UserCollections.find({userId , targetType: 'Book', collectionType: 'favourite'}).populate('targetId', 'title img').select( '-__v' ).lean();
            return favourites;
        } catch (error) {
            throw new Error("Error fetching favourite books");
        }
    },
    addFavouriteBook: async (userId, bookId) => {
        const book = await Book.findById(bookId).select("title img author").lean();
        
        if (!book) {
        throw new Error("Book not found");
    }

        try {
            const favourite = (await UserCollections.create({ userId, targetId: bookId, targetType: "Book", collectionType: "favourite"})).toObject();
            favourite.targetId = book;
            return new bookFavouriteDto(favourite);
        } catch (error) {
            throw new Error("Error adding favourite book");
        }
    },
    removeFavouriteBook: async (userId, categoryId) => {
        try {
            const favourite = await UserCollections.deleteOne({ userId, targetId: categoryId, targetType: "Book", collectionType: "favourite"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite book");
        }
    },
    addFavouriteCategory: async (userId, categoryId) => {
        try {
            const favourite = (await UserCollections.create({ userId, targetId: categoryId, targetType: "Category", collectionType: "favourite" })).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite category");
        }
    },

    removeFavouriteCategory: async (userId, categoryId) => {
        try {
            console.log("from favourite category service",userId, categoryId);
            const favourite = await UserCollections.deleteOne({ userId, targetId: categoryId, targetType: "Category", collectionType: "favourite"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite category");
        }
    },

    getFavouriteCategory: async (userId) => {
        try {
            const favourites = await UserCollections.find({userId , targetType: 'Category', collectionType: "favourite"}).select( '-__v' ).lean();
            return favourites;
        } catch (error) {
            throw error;
            ;
        }
    },
};