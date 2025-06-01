import { validate } from 'express-validation';
import Joi from 'joi';

const objectId = Joi.string().hex().length(24).required().messages({
  'string.length': 'ID must be 24 characters long',
  'string.hex': 'ID must be a valid ObjectId',
  'any.required': '{#label} is required',
});

const createShelveSchema = {
  body: Joi.object({
    bookCount: Joi.number().integer().min(1).default(1).messages({
      'number.base': 'Book count must be a number',
      'number.integer': 'Book count must be an integer',
      'number.min': 'Book count must be at least 1',
    }),
    to: Joi.string().trim().default('me').messages({
      'string.base': '"to" must be a string',
    }),
    isPaied: Joi.boolean().default(false).messages({
      'boolean.base': 'isPaied must be a boolean value',
    }),
  }).required(),
};

export const validateCreateShelve = validate(createShelveSchema, {}, {});
