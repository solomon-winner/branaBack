import { validate } from 'express-validation';
import Joi from 'joi';

const updateBookSchema = Joi.object({
  title: Joi.string()
    .messages({
      'string.base': 'Title must be a string',
    }),

  author: Joi.string()
    .messages({
      'string.base': 'Author must be a string',
    }),

  img: Joi.string().uri()
    .messages({
      'string.base': 'Image must be a string',
      'string.uri': 'Image must be a valid URI',
    }),

  rating: Joi.number().min(0).max(5)
    .messages({
      'number.base': 'Rating must be a number',
      'number.min': 'Rating cannot be less than 0',
      'number.max': 'Rating cannot be more than 5',
    }),

  price: Joi.number().min(0)
    .messages({
      'number.base': 'Price must be a number',
      'number.min': 'Price must be greater than or equal to 0',
    }),

  description: Joi.string().max(2000)
    .messages({
      'string.base': 'Description must be a string',
      'string.max': 'Description cannot exceed 2000 characters',
    }),

  category: Joi.string()
    .messages({
      'string.base': 'Category must be a string',
    }),

  availableBooks: Joi.number().integer().min(0)
    .messages({
      'number.base': 'Available books must be a number',
      'number.integer': 'Available books must be an integer',
      'number.min': 'Available books must be 0 or more',
    }),

  language: Joi.string()
    .messages({
      'string.base': 'Language must be a string',
    }),

  pages: Joi.number().integer().min(1)
    .messages({
      'number.base': 'Pages must be a number',
      'number.integer': 'Pages must be an integer',
      'number.min': 'Pages must be at least 1',
    }),

  publisher: Joi.string()
    .messages({
      'string.base': 'Publisher must be a string',
    }),

  year: Joi.number().integer().min(0).max(new Date().getFullYear())
    .messages({
      'number.base': 'Year must be a number',
      'number.integer': 'Year must be an integer',
      'number.min': 'Year must be 0 or greater',
      'number.max': `Year cannot be later than ${new Date().getFullYear()}`,
    }),

  isBestSeller: Joi.boolean()
    .messages({
      'boolean.base': 'isBestSeller must be a boolean',
    }),

  isTrending: Joi.boolean()
    .messages({
      'boolean.base': 'isTrending must be a boolean',
    }),

  isOnSale: Joi.boolean()
    .messages({
      'boolean.base': 'isOnSale must be a boolean',
    }),

  isDiscounted: Joi.boolean()
    .messages({
      'boolean.base': 'isDiscounted must be a boolean',
    }),

  discount: Joi.number().min(0).max(100)
    .messages({
      'number.base': 'Discount must be a number',
      'number.min': 'Discount must be 0 or more',
      'number.max': 'Discount cannot be more than 100',
    }),

  discountedPrice: Joi.number().min(0)
    .messages({
      'number.base': 'Discounted price must be a number',
      'number.min': 'Discounted price must be at least 0',
    }),

  isComingSoon: Joi.boolean()
    .messages({
      'boolean.base': 'isComingSoon must be a boolean',
    }),

  isPreOrder: Joi.boolean()
    .messages({
      'boolean.base': 'isPreOrder must be a boolean',
    }),

  isSoldOut: Joi.boolean()
    .messages({
      'boolean.base': 'isSoldOut must be a boolean',
    }),

  isApproaved: Joi.boolean()
    .messages({
      'boolean.base': 'isApproaved must be a boolean',
    }),

  isBanned: Joi.boolean()
    .messages({
      'boolean.base': 'isBanned must be a boolean',
    }),
}).min(1).messages({
  'object.min': 'At least one field must be provided for update',
});

export const validateUpdateBook = validate({ body: updateBookSchema }, {}, {});