import { bookFavouriteDto } from "../../DTOS/favouriteDTO/book.dto.js";
import { Book } from "../../models/book.js";
import { UserCollections } from "../../models/userCollections.js";

export const wishListService = {
    getWishList: async (userId) => {
        try {
            const wishList = await UserCollections.find({ userId, collectionType:'wishlist' }).populate("bookId", "title author img price").select("-__v").lean();
             
            return wishList.map((book) => new bookFavouriteDto(book));
        } catch (error) {
            throw new Error("Error fetching wish list");
        }
    },

    addWishList: async (userId, bookId) => {
        try {
            const existingWish = await UserCollections.findOne({ userId, targetId: bookId, collectionType: "wishlist" });
            if (existingWish) {
                throw new Error("Book already in wish list");
            }

            const book = await Book.findById(bookId).select("price").lean();
            if (!book) {
                throw new Error("Book not found");
            }

            const newWish = new WishList({ userId, bookId, targetId: bookId, targetType: "Book", collectionType: "wishlist", price: book.price });
            await newWish.save();
            return new bookFavouriteDto(newWish);
        } catch (error) {
            console.error(error);
            throw new Error("Error adding to wish list");
        }
    },

    removeWishList: async (userId, bookId) => {
        try {
            await UserCollections.deleteOne({ userId, bookId, collectionType: "wishlist" });
            return { message: "Book removed from wish list" };
        } catch (error) {
            throw new Error("Error removing from wish list");
        }
    },
}