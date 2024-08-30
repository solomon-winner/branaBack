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
    price: {
        type: Number,
        required: true,
    },

});

export const WishList = mongoose.model("WishList", wishListSchema);
