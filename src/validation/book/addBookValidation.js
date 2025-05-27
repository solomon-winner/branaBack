import { validate } from 'express-validation';
import Joi from 'joi';

const AddBookSchema = {
  body: Joi.object({
    title: Joi.string().required().messages({
      'string.base': 'Title must be a string',
      'any.required': 'Title is required',
      'string.empty': 'Title cannot be empty',
    }),
    author: Joi.string().required().messages({
      'string.base': 'Author must be a string',
      'any.required': 'Author is required',
      'string.empty': 'Author cannot be empty',
    }),
    category: Joi.string().required().messages({
      'string.base': 'Category must be a string',
      'any.required': 'Category is required',
      'string.empty': 'Category cannot be empty',
    }),
    price: Joi.number().required().messages({
      'number.base': 'Price must be a number',
      'any.required': 'Price is required',
    }),
    availableBooks: Joi.number().integer().min(0).required().messages({
      'number.base': 'Available books must be a number',
      'number.integer': 'Available books must be an integer',
      'number.min': 'Available books cannot be negative',
      'any.required': 'Available books is required',
    }),
    rating: Joi.number().optional().messages({
          'number.base': 'Rating must be a number',
          'number.min': 'Rating must be at least 0',
          'number.max': 'Rating must be at most 5',
    }),
    language: Joi.string().required().messages({
      'string.base': 'Language must be a string',
      'any.required': 'Language is required',
      'string.empty': 'Language cannot be empty',
    }),
    pages: Joi.number().integer().min(1).required().messages({
      'number.base': 'Pages must be a number',
      'number.integer': 'Pages must be an integer',
      'number.min': 'Pages must be at least 1',
      'any.required': 'Pages is required',
    }),
    publisher: Joi.string().optional().messages({
      'string.base': 'Publisher must be a string',
    }),
    year: Joi.number().optional().messages({
      'number.base': 'Year must be a number',
    }),
    img: Joi.string().uri().optional().messages({
      'string.uri': 'Image must be a valid URL',
    }),
    
    description: Joi.string().custom((value, helpers) => {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 2000) {
        return helpers.error('any.custom');
      }
      return value;
    }).messages({
      'string.base': 'Description must be a string',
      'any.custom': 'Description should not exceed 200 words!',
    }),
    isPreOrder: Joi.boolean().optional().messages({
      'boolean.base': 'isPreOrder must be true or false',
    }),
    isComingSoon: Joi.boolean().optional().messages({
      'boolean.base': 'isComingSoon must be true or false',
    }),
    isBanned: Joi.boolean().optional().messages({
      'boolean.base': 'isBanned must be true or false',
    }),
    isBestSeller: Joi.boolean().optional().messages({
      'boolean.base': 'isBestSeller must be true or false',
    }),
    isTrending: Joi.boolean().optional().messages({
      'boolean.base': 'isTrending must be true or false',
    }),
    isOnSale: Joi.boolean().optional().messages({
      'boolean.base': 'isOnSale must be true or false',
    }),
    isDiscounted: Joi.boolean().optional().messages({
      'boolean.base': 'isDiscounted must be true or false',
    }),
    discount: Joi.number().optional().messages({
      'number.base': 'Discount must be a number',
    }),
    discountedPrice: Joi.number().optional().messages({
      'number.base': 'Discounted price must be a number',
    }),
    isApproaved: Joi.boolean().optional().messages({
      'boolean.base': 'isApproaved must be true or false',
    }),
    isSoldOut: Joi.boolean().optional().messages({
      'boolean.base': 'isSoldOut must be true or false',
    }),
  }),
};

export const validateAddBook = validate(AddBookSchema, {}, {});
