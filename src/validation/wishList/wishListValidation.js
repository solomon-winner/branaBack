import { validate } from "express-validation";
import Joi from "joi";

const wishListSchema = {
    body: Joi.object({
        bookId: Joi.string().required().messages({
            "string.base": "Book ID must be a string",
            "any.required": "Book ID is required",
            "string.empty": "Book ID cannot be empty",
        }),

    }),
}

export const validateAddWishList = validate(wishListSchema, {}, {});