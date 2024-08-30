import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: "",
    },
});

export const WishList = mongoose.model("WishList", wishListSchema);
