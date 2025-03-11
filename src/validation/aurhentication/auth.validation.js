import Joi from 'joi';

const phoneRegex = /^[0-9]{10,15}$/;

export const registerSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required(),
  lastName: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().min(6).max(30).required(),
  phoneNo: Joi.string().pattern(phoneRegex).required(),
  altPhoneNo: Joi.string().pattern(phoneRegex).allow(null, '').optional()
});

export const validateRequest = (data) => {
  return registerSchema.validate(data, {
    abortEarly: false,
    stripUnknown: true
  });
};