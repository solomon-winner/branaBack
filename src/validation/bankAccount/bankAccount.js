import {validate} from 'express-validation';
import Joi from 'joi';

const bankAccountSchema = {
  body: Joi.object({
    userId: Joi.string().hex().length(24).required().messages({
      'string.length': 'User ID must be 24 characters long',
      'string.hex': 'User ID must be a valid ObjectId',
      'any.required': 'User ID is required',
    }),
    bankName: Joi.string().trim().min(2).max(50).required().messages({
      'string.min': 'Bank name must be at least 2 characters',
      'string.max': 'Bank name must be at most 50 characters',
      'any.required': 'Bank name is required',
    }),
    accountNo: Joi.string().trim().min(10).max(20).required().messages({
      'string.min': 'Account number must be at least 10 characters',
      'string.max': 'Account number must be at most 20 characters',
      'any.required': 'Account number is required',
    }),
  }),
};

export const validateBankAccount = validate(bankAccountSchema, {}, {});