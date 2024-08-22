import mongoose from "mongoose";

const shelveSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    bookCount: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
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