import mongoose from "mongoose";

const recommendedBooksSchema = new mongoose.Schema({
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
    reason: {
        type: String,
        required: true,
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true });

export const recommendedBooks = mongoose.model('recommendedBooks', recommendedBooksSchema);