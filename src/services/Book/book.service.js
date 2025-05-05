import { BookDTOForUser } from '../../DTOS/bookDTO/bookdtoForUser.dto.js';
import {Book} from '../../models/book.js';

export const BookService = {
  getBooksService: async ({ page = 1, limit = 10, genre }) => {
    const skip = (page - 1) * limit;
    const filter = genre ? { genre } : {};
    const books = await Book.find(filter).skip(skip).limit(limit);
    return books.map((book) => new BookDTOForUser(book));
},
getBookByIdService: async (id) => {
  try {
    const book = await Book.findById(id).select('-__v -createdAt -updatedAt');
    if (!book) {
      throw new Error('Book not found');
    }
    return new BookDTOForUser(book);
  } catch (error) {
    throw new Error('Error fetching book by ID: ' + error.message);
    
  }
},
addBookService: async (bookData) => {
  try {
    const newBook = new Book(bookData);
    const savedBook = await newBook.save();
    return new BookDTOForUser(savedBook);
  } catch (error) {
    console.error('Failed to add book:', error.message);
    throw new Error('Failed to add book');
    
  }
},
updateBookService: async (id, bookData) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      bookData,
      { new: true, runValidators: true, context: 'query' }
    ).select('-__v -createdAt -updatedAt');
    if (!updatedBook) {
      throw new Error('Book not found');
    }
    return new BookDTOForUser(updatedBook);
  } catch (error) {
    console.error('Failed to update book:', error.message);
    throw new Error('Failed to update book');
  }
},
deleteBookService: async (id) => {},
}