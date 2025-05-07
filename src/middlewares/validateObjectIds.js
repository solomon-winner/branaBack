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

          if (typeof value !== 'string') {
            return res.status(400).json({
              message: `Expected a string for ObjectId in ${source}.${key}, but got ${typeof value}`,
            });
          }
          // Only check strings with 24-character hex format
            if (!isValidObjectId(value)) {
              return res.status(400).json({
                message: `Invalid MongoDB ObjectId in ${key}`,
              });
            }
          
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
