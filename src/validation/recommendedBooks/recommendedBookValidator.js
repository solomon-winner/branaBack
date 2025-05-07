import {validate} from 'express-validation';
import Joi from 'joi';

const recommendedBookSchema = Joi.object({
reason: Joi.string().custom((value, helpers) => {
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount > 500) {
      return helpers.error('any.custom');
    }
    return value;
  }).messages({
    'string.base': 'Reason must be a string',
    'any.custom': 'Reason should not exceed 500 words!',
  }),
})

export const validateRecommendedBook = validate({body: recommendedBookSchema}, {}, {});