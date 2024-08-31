import mongoose from "mongoose";

const shelveSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    bookCount: {
        type: Number,
        default: 1,
        min: 1,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    to: {
        type: String,
        default: "me",
    },
    isPaied: {
        type: Boolean,
        default: false,
    },

});
export const Shelve = mongoose.model("Shelve", shelveSchema);