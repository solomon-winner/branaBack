import { Book } from '../models/book.js';
import Joi from 'joi';

export const addBook = async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.category ||
            !req.body.price ||
            !req.body.availableBooks ||
            !req.body.language ||
            !req.body.pages ||
            !req.body.year ||
            !req.body.description
        ) {
            return res.status(400).send({
                message: `Enter all required fields!...`
            })
        }

        const wordCount = (str) => {
            return str.split(/\s+/).length;
        };

        if (wordCount(req.body.description) > 200) {
            return res.status(400).send({
                message: 'Description should not exceed 200 words!'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            price: req.body.price,
            availableBooks: req.body.availableBooks,
            language: req.body.language,
            pages: req.body.pages,
            publisher: req.body.publisher,
            year: req.body.year,
            description: req.body.description,
            isPreOrder: req.body.isPreOrder,
            isComingSoon: req.body.isComingSoon,
        };
        if (req.body.img) {
            newBook.img = req.body.img;
        }
        if (req.body.publisher) {
            newBook.publisher = req.body.publisher;
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
};
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json(books)
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error!'})
    }
};
export const updateBook = async (req, res) => {
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
            if (!UpdatedData[key]) {
                delete UpdatedData[key];
            }
        });
        const UpdatedBook = await Book.findByIdAndUpdate(id, UpdatedData, {new: true});
        if (!UpdatedBook) {
            return res.status(404).send({error: 'Book not found!'})
        }

        res.json(UpdatedBook);

    } catch (error) {
        res.status(500).send({error: 'Internal Server Error!'})
    }
};
