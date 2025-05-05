import { validate } from 'express-validation';
import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

// Extend Joi instance with objectId
Joi.objectId = JoiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required().messages({
    'string.pattern.base': 'Invalid MongoDB ObjectId',
    'any.required': 'ID is required',
  }),
});

export const validateParams = validate({ params: ParamsSchema }, {}, {});
