import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bankAccountName: {
        type : String,
        required: true
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    });

export const BankAccount = mongoose.model('BankAccount', BankAccountSchema);