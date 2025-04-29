import mongoose from "mongoose";

const savedBooksSchema = new mongoose.Schema({
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
    savedAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

export const savedBooks = mongoose.model('savedBooks', savedBooksSchema);