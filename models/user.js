import mongoose from 'mongoose';
import { BankAccountSchema } from './bankAccount.js';
import { AddressSchema } from './address.js';

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    profilePicture: {
        type: String,
        default: ''
    },
    wishlist: {
        type: Array,
        default: []
    },
    phoneNo: {
        type: String,
        default: ''
    },
    altPhoneNo: {
        type: String,
        default: ''
    },
    BankAccount: {
        type: [BankAccountSchema],
        default: []
    },
    address: {
        type: [AddressSchema],
        default: []
    },
    orders: {
        type: [String],
        default: []
    },
    shelve: {
        type: [String],
        default: []
    },
    savedBooks: {
        type: [String],
        default: []
    },
    recommendedBooks: {
        type: [String],
        default: []
    },
    Categories: {
        type: [String],
        default: []
    },
    authors: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    });

export const User = mongoose.model('User', userSchema);