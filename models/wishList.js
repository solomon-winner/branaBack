import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({});

export const WishList = mongoose.model("WishList", wishListSchema);
