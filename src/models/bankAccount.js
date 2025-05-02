import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bankAccountName: {
    type: String,
    required: true
  },
  bankAccountNo: {
    type: String,
    required: true
  },
});

BankAccountSchema.index({ userId: 1, bankAccountNo: 1 }, { unique: true });

BankAccountSchema.pre('save', async function (next) {
  const count = await mongoose.model('BankAccount').countDocuments({ userId: this.userId });
  if (count >= 10) {
    return next(new Error('User cannot have more than 10 bank accounts'));
  }
  next();
});

export const BankAccount = mongoose.model('BankAccount', BankAccountSchema);
