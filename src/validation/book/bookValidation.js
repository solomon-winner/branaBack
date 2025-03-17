import { validate } from 'express-validation';
import Joi from 'joi';

const JoiBook = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'Title is required',
    }),
    author: Joi.string().required(),
    img: Joi.string().optional(),
    rating: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().max(200).required(),
    category: Joi.string().required(),
    availableBooks: Joi.number().required(),
    language: Joi.string().required(),
    pages: Joi.number().required(),
    publisher: Joi.string().optional(),
    year: Joi.number().required(),
    isBestSeller: Joi.boolean().optional(),
    isTrending: Joi.boolean().optional(),
    isOnSale: Joi.boolean().optional(),
    isDiscounted: Joi.boolean().optional(),
    discount: Joi.boolean().optional(),
    discountedPrice: Joi.boolean().optional(),
    isComingSoon: Joi.boolean().optional(),
    isPreOrder: Joi.boolean().optional(),
    isSoldOut: Joi.boolean().optional(),
    isApproaved: Joi.boolean().optional(),
    isBanned: Joi.boolean().optional()
});

export const bookValidation = validate({ body: JoiBook }, {}, {});