import Joi from 'joi';
import JoiObjectId from 'joi-objectid';

// Add ObjectId extension to Joi
Joi.object = JoiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.object()
    .messages({
      'string.pattern.base': 'Invalid MongoDB ObjectId',
      'any.required': 'ID is required',
    }),
});

export const validateParams = validate(ParamsSchema, {}, {});
