import mongoose from 'mongoose';

const isValidObjectId = (value) => mongoose.Types.ObjectId.isValid(value);

/**
 * Middleware to check all fields (params, body, query) for valid ObjectIds.
 * @param {Array<string>} sources - e.g., ['params', 'body', 'query']
 * @returns middleware
 */
export const validateObjectIds = (sources = ['params']) => {
  return (req, res, next) => {
    try {
      for (const source of sources) {
        if (!req[source]) continue;
        for (const key in req[source]) {
          const value = req[source][key];
          // Only check strings with 24-character hex format
          if (typeof value === 'string' && /^[a-f\d]{24}$/i.test(value)) {
            if (!isValidObjectId(value)) {
              return res.status(400).json({
                message: `Invalid MongoDB ObjectId in ${source}.${key}`,
              });
            }
          }
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
