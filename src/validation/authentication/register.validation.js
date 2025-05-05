import { validate } from 'express-validation';
import Joi from 'joi';

const phoneRegex = /^[0-9]{10,15}$/;

const registerSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().min(2).max(50).required().messages({
      'string.empty': 'First name is required',
      'string.min': 'First name must be at least 2 characters',
      'string.max': 'First name must be at most 50 characters',
    }),
    lastName: Joi.string().trim().min(2).max(50).required().messages({
      'string.empty': 'Last name is required',
      'string.min': 'Last name must be at least 2 characters',
      'string.max': 'Last name must be at most 50 characters',
    }),
    email: Joi.string().email().lowercase().trim().required().messages({
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).max(30).required().messages({
      'string.min': 'Password must be at least 6 characters',
      'string.max': 'Password must be at most 30 characters',
      'any.required': 'Password is required',
    }),
    phoneNo: Joi.string().pattern(phoneRegex).required().messages({
      'string.pattern.base': 'Phone number must be between 10 and 15 digits',
      'any.required': 'Phone number is required',
    }),
    altPhoneNo: Joi.string().pattern(phoneRegex).allow(null, '').optional().messages({
      'string.pattern.base': 'Alt phone number must be between 10 and 15 digits',
    }),
  }),
};

export const validateRegister = validate(registerSchema, {}, {});
