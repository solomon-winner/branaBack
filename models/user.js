import mongoose from 'mongoose';

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
});

export const User = mongoose.model('User', userSchema);