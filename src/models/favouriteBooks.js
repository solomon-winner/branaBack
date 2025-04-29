import mongoose from "mongoose";

const favouriteBooksSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
}, { timestamps: true });

export const FavouriteBooks = mongoose.model('FavouriteBooks', favouriteBooksSchema);