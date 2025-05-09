import { bookFavouriteDto } from "../../DTOS/favouriteDTO/book.dto.js";
import { Book } from "../../models/book.js";
import { UserCollections } from "../../models/userCollections.js";

export const wishListService = {
    getWishList: async (userId) => {
        try {
            const wishList = await UserCollections.find({ userId, collectionType:'wishlist' }).populate("targetId", "title author img price").select("-__v").lean();
            return wishList.map((book) => new bookFavouriteDto(book));
        } catch (error) {
            throw new Error("Error fetching wish list:"+ error.message);
        }
    },

    addWishList: async (userId, bookId) => {
        try {
            
            const book = await Book.findById(bookId).select("price title img author").lean();

            if (!book) {
                throw new Error("Book not found");
            }
            console.log("Book found:", book);
            const newWish = new UserCollections({ userId, targetId: bookId, targetType: "Book", collectionType: "wishlist", price: book.price });
            await newWish.save();
            const plainWish = newWish.toObject();
            plainWish.targetId = book;
            console.log("New wish list item:", plainWish);
            return new bookFavouriteDto(plainWish);
        } catch (error) {
            if (error.code === 11000) {
            throw new Error("Book already in wish list");
        }
    
            console.error(error);
            throw new Error("Error adding to wish list");
        }
    },

    removeWishList: async (userId, targetId) => {
        try {
            await UserCollections.deleteOne({ userId, targetId, collectionType: "wishlist" });
            return { message: "Book removed from wish list" };
        } catch (error) {
            throw new Error("Error removing from wish list");
        }
    },
}