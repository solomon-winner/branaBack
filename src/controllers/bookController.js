import { BookDTOForUser } from '../DTOS/bookDTO/bookdtoForUser.dto.js';
import { Book } from '../models/book.js';
import { BookService } from '../services/Book/book.service.js';
import ResponseHelper from '../utils/responseHelper.js';

export const addBook = async (req, res, next) => {
    try {
      const {
        title,
        author,
        category,
        price,
        availableBooks,
        language,
        pages,
        publisher,
        year,
        description,
        img,
        isPreOrder,
        isComingSoon
      } = req.body;
  
      const book = await BookService.addBookService({
        title,
        author,
        category,
        price,
        availableBooks,
        language,
        pages,
        publisher,
        year,
        description,
        img,
        isPreOrder,
        isComingSoon
      });
      
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
        const {
            title,
            author,
            img,
            rating,
            price,
            description,
            category,
            availableBooks,
            language,
            pages,
            publisher,
            year,
            isBestSeller,
            isTrending,
            isOnSale,
            isDiscounted,
            discount,
            discountedPrice,
            isComingSoon,
            isPreOrder,
            isSoldOut,
            isApproaved,
            isBanned
        } = req.body;

        const UpdatedData = {
            title,
            author,
            img,
            rating,
            price,
            description,
            category,
            availableBooks,
            language,
            pages,
            publisher,
            year,
            isBestSeller,
            isTrending,
            isOnSale,
            isDiscounted,
            discount,
            discountedPrice,
            isComingSoon,
            isPreOrder,
            isSoldOut,
            isApproaved,
            isBanned
        }

        Object.keys(UpdatedData).forEach(key => {
            if (UpdatedData[key] === undefined || UpdatedData[key] === null) {
                delete UpdatedData[key];
            }
        });
        const UpdatedBook = await BookService.updateBookService(id, UpdatedData);

        return ResponseHelper.success(res, 'Book updated successfully', UpdatedBook, 200);

    } catch (error) {
        next(error);
    }
};
