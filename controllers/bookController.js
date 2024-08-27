import {Book} from '../models/book.js';

export const addBook = async (req, res) => {
    try {
        if (!req.body.title,
            !req.body.author,
            !req.body.category,
            !req.body.price,
            !req.body.availableBooks,
            !req.body.language,
            !req.body.pages,
            !req.body.publisher,
            !req.body.year,
            !req.body.description
            ) {
            return res.status(400).send({
                message: 'Enter all required fields!...'
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
        if(req.body.img) {
            newBook.img = req.body.img;
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
};
export const getBooks = (req, res) => {

};
export const updateBook = (req, res) => {};
