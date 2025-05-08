// utils/checkDocumentExist.js
import mongoose from "mongoose";

/**
 * Check if a document exists in the given model by ID.
 * @param {String} modelName - The name of the model to check (e.g., 'Book', 'Author').
 * @param {String|ObjectId} id - The ID of the document to check.
 * @throws {Error} if the document does not exist.
 */
export const checkDocumentExist = async (modelName, id) => {
  const Model = mongoose.model(modelName);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Invalid ID format for ${modelName}`);
  }

  const exists = await Model.exists({ _id: id });

  if (!exists) {
    throw new Error(`${modelName} with the given ID does not exist`);
  }
};
