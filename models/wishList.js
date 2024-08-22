import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    bookCount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    to: {
        type: String,
        default: "me",
    },
});

export const WishList = mongoose.model("WishList", wishListSchema);
