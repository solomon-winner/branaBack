import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    poBox: {
        type: String,
        required: false
    },
    woreda: {
        type: String,
        required: true
    },
    });

export const BankAccount = mongoose.model('User', AddressSchema);