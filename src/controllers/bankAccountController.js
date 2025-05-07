import { bankAccountService } from "../services/BankAccount/bankAccount.service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const addAccount = async (req, res, next) => {
   try {
        const { userId, accountNumber, bankName } = req.body;
        const accountData = {
            userId,
            accountNumber,
            bankName
        };
        const newAccount = await bankAccountService.addAccount(accountData);
        return ResponseHelper.success(res, 'Account added successfully', newAccount, 201);
   } catch (error) {
        next(error);
    }
    
};
export const updateAccount = async (req, res, next) => {
    try {
        const { accountId } = req.params;
        const updatedData = req.body;
        const updatedAccount = await bankAccountService.updateAccount(accountId, updatedData);
        return ResponseHelper.success(res, 'Account updated successfully', updatedAccount, 200);
    } catch (error) {
        next(error);
    }
};

export const getAccounts = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const accounts = await bankAccountService.getAccounts(userId);
        return ResponseHelper.success(res, 'Accounts retrieved successfully', accounts, 200);
    } catch (error) {
        next(error);
    }
};
export const removeAccount = async (req, res, next) => {
    try {
        const { accountId } = req.params;
        const deletedAccount = await bankAccountService.deleteAccount(accountId);
        return ResponseHelper.success(res, 'Account deleted successfully', deletedAccount, 200);
    } catch (error) {
        next(error);
    }
};
