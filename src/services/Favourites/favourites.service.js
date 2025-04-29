export const FavouriteService = {
    addFavouriteCategory: async (userId, categoryId) => {
        try {
            const favourite = await FavouriteCategory.create({ userId, categoryId });
            return favourite;
        } catch (error) {
            throw new Error("Error adding favourite category");
        }
    },

    removeFavouriteCategory: async (userId, categoryId) => {
        try {
            const favourite = await FavouriteCategory.destroy({ where: { userId, categoryId } });
            return favourite;
        } catch (error) {
            throw new Error("Error removing favourite category");
        }
    },

    getFavouriteCategory: async (userId) => {
        try {
            const favourites = await FavouriteCategory.findAll({ where: { userId } });
            return favourites;
        } catch (error) {
            throw new Error("Error fetching favourite categories");
        }
    },
};