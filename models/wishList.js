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
    isGift: {
        type: Boolean,
        default: false,
    },
});

export const WishList = mongoose.model("WishList", wishListSchema);
