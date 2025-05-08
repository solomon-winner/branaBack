import e from 'express';
import {validate} from 'express-validation';
import Joi from 'joi';

const CategorySchema = {
    body: Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'any.required': 'Name is required',
            'string.empty': 'Name cannot be empty',
        }),
        description: Joi.string().required().custom((value, helpers) => {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount > 1000) {
              return helpers.error('any.custom');
            }
            return value;
          }).messages({
            'string.base': 'Description must be a string',
        }),
    }),
};

const UpdateCategorySchema = {
    body: Joi.object({
        name: Joi.string().required().messages({
            'string.base': 'Name must be a string',
            'any.required': 'Name is required',
            'string.empty': 'Name cannot be empty',
        }),
        description: Joi.string().required().custom((value, helpers) => {
            const wordCount = value.trim().split(/\s+/).length;
            if (wordCount > 1000) {
              return helpers.error('any.custom');
            }
            return value;
          }).messages({
            'string.base': 'Description must be a string',
        }),
    }).min(1).messages({
        'object.min': 'At least one field is required',
    }),
};
export const UpdateCategoryValidation = validate(UpdateCategorySchema, {}, {});
export const AddCategoryValidation = validate(CategorySchema, {}, {});