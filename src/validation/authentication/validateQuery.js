import Joi from 'joi';
import { validate } from 'express-validation';

const querySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1).messages({
    'number.base': 'Page must be a number',
    'number.integer': 'Page must be an integer',
    'number.min': 'Page must be at least 1',
  }),
  limit: Joi.number().integer().min(1).max(100).default(10).messages({
    'number.base': 'Limit must be a number',
    'number.integer': 'Limit must be an integer',
    'number.min': 'Limit must be at least 1',
    'number.max': 'Limit cannot exceed 100',
  }),
  genre: Joi.string().optional().messages({
    'string.base': 'Genre must be a string',
  }),
});

export const validateQuery = validate({ query: querySchema }, {}, {});
