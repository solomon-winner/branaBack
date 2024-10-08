import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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

export const Address = mongoose.model('Address', AddressSchema);