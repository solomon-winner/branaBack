import {validate} from 'express-validation';
import Joi from 'joi';

const CategorySchema = {
    body: Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'any.required': 'Name is required',
            'string.empty': 'Name cannot be empty',
        }),
        description: Joi.string().optional().messages({
            'string.base': 'Description must be a string',
        }),
    }),
};

export const CategoryValidation = validate(CategorySchema, {}, {});