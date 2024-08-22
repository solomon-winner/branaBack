import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
});