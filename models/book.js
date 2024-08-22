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
    isDiscounted: {
        type: Boolean,
        default: false,
    },
    discount: {
        type: Number,
        default: 0,
    },
    discountedPrice: {
        type: Number,
        default: 0,
    },
    isComingSoon: {
        type: Boolean,
        default: false,
    },
    isPreOrder: {
        type: Boolean,
        default: false,
    },
    isSoldOut: {
        type: Boolean,
        default: false,
    },
    isApproaved: {
        type: Boolean,
        default: true,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },

});

export const Book = mongoose.model('Book', bookSchema);