import { validate } from 'express-validation';
import Joi from 'joi';

const phoneRegex = /^[0-9]{10,15}$/;

const updateUserSchema = {
  body: Joi.object({
    firstName: Joi.string().trim().min(2).max(50).optional().messages({
      'string.min': 'First name must be at least 2 characters',
      'string.max': 'First name must be at most 50 characters',
      'string.base': 'First name must be a string',
    }),
    lastName: Joi.string().trim().min(2).max(50).optional().messages({
      'string.min': 'Last name must be at least 2 characters',
      'string.max': 'Last name must be at most 50 characters',
      'string.base': 'Last name must be a string',
    }),
    email: Joi.string().email().lowercase().trim().optional().messages({
      'string.email': 'Email must be a valid email address',
      'string.base': 'Email must be a string',
    }),
    profilePicture: Joi.string().uri().optional().allow('', null).messages({
      'string.uri': 'Profile picture must be a valid URL',
      'string.base': 'Profile picture must be a string',
    }),
    phoneNo: Joi.string().pattern(phoneRegex).optional().allow('', null).messages({
      'string.pattern.base': 'Phone number must be between 10 and 15 digits',
      'string.base': 'Phone number must be a string',
    }),
    altPhoneNo: Joi.string().pattern(phoneRegex).optional().allow('', null).messages({
      'string.pattern.base': 'Alt phone number must be between 10 and 15 digits',
      'string.base': 'Alt phone number must be a string',
    }),
    address: Joi.string().hex().length(24).optional().allow(null).messages({
      'string.length': 'Address ID must be 24 characters long',
      'string.hex': 'Address ID must be a valid ObjectId',
      'string.base': 'Address must be a string',
    }),
  }).min(1).messages({
    'object.min': 'At least one field must be provided for update',
  }),
};

export const validateUpdateUser = validate(updateUserSchema, {}, {});
