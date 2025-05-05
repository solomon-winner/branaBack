import { BookService } from '../services/Book/book.service.js';
import ResponseHelper from '../utils/responseHelper.js';

export const addBook = async (req, res, next) => {
    try {

      const book = await BookService.addBookService(req.body);
      
      return ResponseHelper.success(res, 'Book created successfully', book, 201);
    } catch (error) {
      next(error);
    }
  };
  

export const getBookById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await BookService.getBookByIdService(id);
        return ResponseHelper.success(res, 'Book retrieved successfully', book, 200);
    } catch (error) {
        next(error);
    }
}

export const getBooks = async (req, res, next) => {
    try {

        const { page, limit, genre } = req.query;
        const books = await BookService.getBooksService({ page, limit, genre });
        return ResponseHelper.success(res, 'Books retrieved successfully',books , 200);

    } catch (error) {
        next(error);
    }
};

export const updateBook = async (req, res, next) => {
    try {
        const {id} = req.params;
    
        const UpdatedBook = await BookService.updateBookService(id, req.body);

        return ResponseHelper.success(res, 'Book updated successfully', UpdatedBook, 200);

    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedBook = await BookService.deleteBookService(id);
        return ResponseHelper.success(res, 'Book deleted successfully', deletedBook, 200);
    } catch (error) {
        next(error);
    }
}