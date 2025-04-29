import { getFavouriteAuthor } from "../../controllers/favouriteController.js";
import { Favourite } from "../../models/favourites.js";

export const FavouriteService = {
    addFavouriteAuthor: async (userId, authorId) => {
        try {
            const favourite = (await Favourite.create({ userId, targetId: authorId, targetType: "Author" })).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite author");
        }
    },
    getFavouriteAuthor: async (userId) => {
        try {
            const favourites = await Favourite.find({userId , targetType: 'Author'}).populate('targetId', 'name img').select( '- __v' ).lean();
            return favourites;
        
        } catch (error) {
            throw new Error("Error fetching favourite authors");
        }
    },
    removeFavouriteAuthor: async (userId, authorId) => {
        try {
            const favourite = await Favourite.deleteOne({ userId, targetId: authorId, targetType: "Author"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite author");
        }
    },
    getFavouriteBook: async (userId) => {
        try {
            const favourites = await Favourite.find({userId , targetType: 'Book'}).populate('targetId', 'title img').select( '- __v' ).lean();
            return favourites;
        } catch (error) {
            throw new Error("Error fetching favourite books");
        }
    },
    addFavouriteBook: async (userId, bookId) => {
        try {
            const favourite = (await Favourite.create({ userId, targetId: bookId, targetType: "Book" })).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite book");
        }
    },
    removeFavouriteBook: async (userId, bookId) => {
        try {
            const favourite = await Favourite.deleteOne({ userId, targetId: bookId, targetType: "Book"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite book");
        }
    },
    addFavouriteCategory: async (userId, bookId) => {
        try {
            const favourite = (await Favourite.create({ userId, targetId: bookId, targetType: "Category" })).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite category");
        }
    },

    removeFavouriteCategory: async (userId, categoryId) => {
        try {
            const favourite = await Favourite.deleteOne({ userId, targetId: categoryId, targetType: "Category"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite category");
        }
    },

    getFavouriteCategory: async (userId) => {
        try {
            const favourites = await Favourite.find({userId , targetType: 'Category'}).select( '- __v' ).lean();
            return favourites;
        } catch (error) {
            throw new Error("Error fetching favourite categories");
        }
    },
};