import express from "express";
import { addBook, getBooks, updateBook } from "../controllers/bookController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         img:
 *           type: string
 *         rating:
 *           type: number
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         availableBooks:
 *           type: number
 *         language:
 *           type: string
 *         pages:
 *           type: number
 *         publisher:
 *           type: string
 *         year:
 *           type: number
 *         isBestSeller:
 *           type: boolean
 *         isTrending:
 *           type: boolean
 *         isOnSale:
 *           type: boolean
 *         isDiscounted:
 *           type: boolean
 *         discount:
 *           type: number
 *         discountedPrice:
 *           type: number
 *         isComingSoon:
 *           type: boolean
 *         isPreOrder:
 *           type: boolean
 *         isSoldOut:
 *           type: boolean
 *         isApproaved:
 *           type: boolean
 *         isBanned:
 *           type: boolean
 *       example:
 *         title: "My First Book"
 *         author: "John Doe"
 *         price: 19.99
 *         language: "English"
 *         isBestSeller: true
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number to retrieve
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The number of books per page
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: The genre of the books to retrieve
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/", getBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request
 */
router.post("/", addBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The updated book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 */
router.put("/:id", updateBook);

export default router;
