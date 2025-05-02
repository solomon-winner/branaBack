import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
  user: {
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

BankAccountSchema.index({ user: 1, bankAccountNo: 1 }, { unique: true });

BankAccountSchema.pre('save', async function (next) {
  const count = await mongoose.model('BankAccount').countDocuments({ user: this.user });
  if (count >= 10) {
    return next(new Error('User cannot have more than 10 bank accounts'));
  }
  next();
});

export const BankAccount = mongoose.model('BankAccount', BankAccountSchema);
