import { validate } from "express-validation";
import Joi from "joi";

const AuthorSchema = {
    body: Joi.object({
        name: Joi.string().required().messages({
            "string.base": "Name must be a string",
            "any.required": "Name is required",
            "string.empty": "Name cannot be empty",
        }),
        img: Joi.string().uri().optional().messages({
            "string.uri": "Image must be a valid URL",
        }),
        bio: Joi.string().optional().messages({
            "string.base": "Bio must be a string",
        }),
        birthDate: Joi.date().iso().optional().messages({
            "date.base": "Birth date must be a valid date",
            "date.iso": "Birth date must be in ISO format (YYYY-MM-DD)",
        }),
        deathDate: Joi.date().iso().optional().messages({
            "date.base": "Death date must be a valid date",
            "date.iso": "Death date must be in ISO format (YYYY-MM-DD)",
        }),
    }),
}

const UpdateAuthorSchema = {
    body: Joi.object({
        name: Joi.string().optional().messages({
            "string.base": "Name must be a string",
            "any.required": "Name is required",
            "string.empty": "Name cannot be empty",
        }),
        img: Joi.string().uri().optional().messages({
            "string.uri": "Image must be a valid URL",
        }),
        bio: Joi.string().optional().messages({
            "string.base": "Bio must be a string",
        }),
        birthDate: Joi.date().iso().optional().messages({
            "date.base": "Birth date must be a valid date",
            "date.iso": "Birth date must be in ISO format (YYYY-MM-DD)",
        }),
        deathDate: Joi.date().iso().optional().messages({
            "date.base": "Death date must be a valid date",
            "date.iso": "Death date must be in ISO format (YYYY-MM-DD)",
        }),
    }).min(1).messages({
        "object.min": "At least one field is required",
    }),
}

export const UpdateAuthorValidation = validate(UpdateAuthorSchema, {}, {});


export const AuthorValidation = validate(AuthorSchema, {}, {});
