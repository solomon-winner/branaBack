import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
import { validate } from 'express-validation';

Joi.object = JoiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.object()
    .messages({
      'string.pattern.base': 'Invalid MongoDB ObjectId',
      'any.required': 'ID is required',
    }),
});

export const validateParams = validate({params:ParamsSchema}, {}, {});
