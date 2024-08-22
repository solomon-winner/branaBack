import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    deathDate: {
        type: Date,
        required: false,
    },
});

export const Author = mongoose.model("Author", authorSchema);