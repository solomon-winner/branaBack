import { BookDTOForUser } from '../../DTOS/bookDTO/bookdtoForUser.dto.js';
import {Book} from '../../models/book.js';
import { UserCollections } from '../../models/userCollections.js';
import getPagination from '../../utils/getPagination.js';

export const BookService = {
  getBooksService: async ({ page = 1, limit = 10, category, userId }) => {
    const skip = (page - 1) * limit;
    const filter = category ? { category } : {};
    const books = await Book.find( filter).skip(skip).limit(limit);
   const bookIds = books.map(book => book._id);

    const collections = await UserCollections.find({
      userId: userId,
      targetId: { $in: bookIds},
      targetType: 'Book',
    })
    const collectionsByBookId = {};

    collections.forEach(collection => {
      const bookId = collection.targetId.toString();
      if (!collectionsByBookId[bookId]) {
        collectionsByBookId[bookId] = {};
      }
      collectionsByBookId[bookId][collection.collectionType] = true;
    });

    const enrichedBooks = books.map(book => {
      const collectionInfo = collectionsByBookId[book._id.toString()] || {};
      return {
        ...book.toObject(),
        isInCollection: {
            isFavourite: !!collectionInfo.favourite,
            isWishlist: !!collectionInfo.wishlist,
            isSaved: !!collectionInfo.saved,
            isRecommended: !!collectionInfo.recommended,
        },
      };
    })
    const metaData =  await getPagination( page, limit, Book, filter);
    return {metaData, books: enrichedBooks.map((book) => new BookDTOForUser(book))};
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
deleteBookService: async (id) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(id).select('-__v -createdAt -updatedAt');
    if (!deletedBook) {
      throw new Error('Book not found');
    }
    return new BookDTOForUser(deletedBook);
  } catch (error) {
    console.error('Failed to delete book:', error.message);
    throw new Error('Failed to delete book');
  }
},
}