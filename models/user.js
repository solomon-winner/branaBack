import mongoose from 'mongoose';
import { BankAccountSchema } from './bankAccount.js';
import { AddressSchema } from './address.js';

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
    profilePicture: {
        type: String,
        default: ''
    },
    wishList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "WishList",
        default: []
    }],
    phoneNo: {
        type: String,
        default: ''
    },
    altPhoneNo: {
        type: String,
        default: ''
    },
    BankAccounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BankAccount",
        default: []
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        default: null
    },
    shelve: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shelve",
        default: []
    }],
    savedBooks: [{
        type: String,
        default: []
    }],
    recommendedBooks: [{
        type: String,
        default: []
    }],
    Categories: [{
        type: String,
        default: []
    }],
    authors: [{
        type: String,
        default: []
    }],
}, {timestamps: true,});

export const User = mongoose.model('User', userSchema);