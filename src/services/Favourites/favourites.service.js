import { Favourite } from "../../models/favourites.js";

export const FavouriteService = {
    addFavouriteCategory: async (userId, bookId) => {
        try {
            const favourite = (await Favourite.create({ userId, targetId: bookId, targetType: "category" })).toObject();
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite category");
        }
    },

    removeFavouriteCategory: async (userId, categoryId) => {
        try {
            const favourite = await Favourite.deleteOne({ userId, targetId: categoryId, targetType: "category"} );
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite category");
        }
    },

    getFavouriteCategory: async (userId) => {
        try {
            const favourites = await Favourite.find({userId , targetType: 'category'}).select( '- __v' ).lean();
            return favourites;
        } catch (error) {
            throw new Error("Error fetching favourite categories");
        }
    },
};