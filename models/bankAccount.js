import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
    bankAccountName: {
        type : String,
        required: true
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    });

export const BankAccount = mongoose.model('User', BankAccountSchema);