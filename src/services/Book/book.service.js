import Book from '../models/Book.js';

export const getBooksService = async ({ page = 1, limit = 10, genre }) => {
  const skip = (page - 1) * limit;
  const filter = genre ? { genre } : {};

  const books = await Book.find(filter).skip(skip).limit(limit);
  return books;
};
