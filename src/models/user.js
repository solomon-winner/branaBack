import mongoose from 'mongoose';

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
        ref: 'Role',
        default: 'user',
        enum: ['user', 'admin'],
    },
    profilePicture: {
        type: String,
        default: ''
    },
    phoneNo: {
        type: String,
        default: ''
    },
    altPhoneNo: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive', 'suspended'],
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        default: null
    },
    bankAccount: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BankAccount',
            default: null
        }
    ]

}, {timestamps: true,});

export const User = mongoose.model('User', userSchema);