import { validate } from 'express-validation';
import JoiBase from 'joi';
import joiObjectId from 'joi-objectid';

const Joi = JoiBase;
Joi.objectId = joiObjectId(Joi);

const combinedSchema = {
  params: Joi.object({
    userId: Joi.objectId().required().messages({
      'string.pattern.name': 'Invalid ID',
      'any.required': 'ID is required',
    }),
  }),
  body: Joi.object({
    bookId: Joi.objectId().required().messages({
      'string.pattern.name': 'Invalid ID',
      'any.required': 'ID is required',
    }),
  }),
};

export const validateId = validate(combinedSchema, {}, {});
