import { UserCollections } from "../../models/userCollections.js";

export const wishListService = {
    getWishList: async (userId) => {
        try {
            const wishList = await UserCollections.find({ userId, collectionType:'wishlist' }).populate("bookId");
            return wishList;
        } catch (error) {
            throw new Error("Error fetching wish list");
        }
    },

    addWishList: async (userId, bookId, price) => {
        try {
            const existingWish = await WishList.findOne({ userId, targetId: bookId, targetType: "Book", collectionType: "wishlist", price });
            if (existingWish) {
                throw new Error("Book already in wish list");
            }
            const newWish = new WishList({ userId, bookId });
            await newWish.save();
            return newWish;
        } catch (error) {
            throw new Error("Error adding to wish list");
        }
    },

    removeWishList: async (userId, bookId) => {
        try {
            await WishList.deleteOne({ userId, bookId, collectionType: "wishlist" });
            return { message: "Book removed from wish list" };
        } catch (error) {
            throw new Error("Error removing from wish list");
        }
    },
}