import { getAccounts } from "../../controllers/bankAccountController";

export const bankAccountService = {
    getAccountsService: async ({ page = 1, limit = 10, userId }) => {
        const skip = (page - 1) * limit;
        const filter = userId ? { userId } : {};

        const accounts = await getAccounts(filter).skip(skip).limit(limit);
        return accounts;
    },  
    addAccountService: async (accountData) => {
        try {
            const newAccount = await BankAccount(accountData).save();
            return newAccount;
        } catch (error) {
            console.error("Failed to add account:", error.message);
            throw new Error('Failed to add account');
        }
    },
    updateAccountService: async (id, updatedData) => {
        try {
            if (!updatedData || Object.keys(updatedData).length === 0) {
                throw new Error("No update data provided");
            }

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
            throw new Error(error.message || 'Failed to update account');
        }
    },
    deleteAccountService: async (id) => {
        try {
            const deletedAccount = await BankAccount.findByIdAndDelete(id);
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