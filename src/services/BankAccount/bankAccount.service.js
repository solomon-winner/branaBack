import { BankAccount } from "../../models/bankAccount.js";

export const bankAccountService = {
    getAccountsService: async (userId) => {
        try {
            const accounts = await BankAccount.find({userId}).select("-__v").lean();
            return accounts;
        } catch (error) {
            console.error("Failed to get accounts:", error.message);
            throw new Error('Failed to get accounts');
        }

    },  
    addAccountService: async (accountData) => {
        try{
            console.log('Received accountData:', accountData);
            const count = await BankAccount.countDocuments({userId: accountData.userId});
            if (count >= 10) {
                throw new Error('You cannot have more than 10 bank accounts');
                }

              const newAccount = new BankAccount(accountData);
              const savedAccount = await newAccount.save();
              const { __v, createdAt, updatedAt, ...cleaned } = savedAccount.toObject();

              return cleaned;

        } catch (error) {
            console.error("Failed to get accounts:", error.message);
            throw new Error('Failed to get accounts');
        }
    },
    updateAccountService: async (id, updatedData) => {
        try {
            
            const updatedAccount = await BankAccount.findByIdAndUpdate(
                id,
                updatedData,
                { new: true, runValidators: true, context: "query" }
            );

            if (!updatedAccount) {
                throw new Error("Account not found");
            }

            return updatedAccount;
        } catch (error) {
            console.error(`Failed to update account ${id}:`, error);
            throw new Error('Failed to update account');
        }
    },
    deleteAccountService: async (id) => {
        try {
            const deletedAccount = await BankAccount.findByIdAndDelete(id).select('-__v -createdAt -updatedAt').lean();
            if (!deletedAccount) {
                throw new Error("Account not found");
            }
            return deletedAccount;
        } catch (error) {
            console.error(`Failed to delete account ${id}:`, error);
            throw new Error(error.message || 'Failed to delete account');
        }
    },
    
}