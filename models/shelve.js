import mongoose from "mongoose";

const shelveSchema = new mongoose.Schema({
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
});
export const Shelve = mongoose.model("Shelve", shelveSchema);