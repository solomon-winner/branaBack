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
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    availableBooks: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    isBestSeller: {
        type: Boolean,
        default: false,
    },
    isTrending: {
        type: Boolean,
        default: false,
    },
    isOnSale: {
        type: Boolean,
        default: true,
    },
});