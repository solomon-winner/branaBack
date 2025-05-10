import express from "express";
import {
  addFavouriteCategory,
  removeFavouriteCategory,
  getFavouriteCategory,
  getFavouriteBook,
  getFavouriteAuthor,
  addFavouriteBook,
  removeFavouriteBook,
  addFavouriteAuthor,
  removeFavouriteAuthor,
} from "../controllers/favouriteController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Favourites
 *   description: Endpoints for managing user favourites
 */

/**
 * @swagger
 * /api/favourites/category:
 *   get:
 *     summary: Get user's favourite categories
 *     tags: [Favourites]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite categories retrieved successfully
 *       400:
 *         description: Bad request
 */
router.get("/category", validateObjectIds(['query']),getFavouriteCategory);

/**
 * @swagger
 * /api/favourites/book:
 *   get:
 *     summary: Get user's favourite books
 *     tags: [Favourites]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite books retrieved successfully
 */
router.get("/book", validateObjectIds(['query']), getFavouriteBook);

/**
 * @swagger
 * /api/favourites/author:
 *   get:
 *     summary: Get user's favourite authors
 *     tags: [Favourites]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite authors retrieved successfully
 */
router.get("/author", validateObjectIds(['query']), getFavouriteAuthor);

/**
 * @swagger
 * /api/favourites/category:
 *   post:
 *     summary: Add a category to user's favourites
 *     tags: [Favourites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryId
 *             properties:
 *               userId:
 *                 type: string
 *               categoryId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Favourite category added successfully
 */
router.post("/category", validateObjectIds(['body']), addFavouriteCategory);

/**
 * @swagger
 * /api/favourites/category/{userId}:
 *   delete:
 *     summary: Remove a category from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *       - in: query
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Category
 *     responses:
 *       200:
 *         description: Favourite category removed successfully
 */
router.delete("/category/:userId", validateObjectIds(['params','query']), removeFavouriteCategory);

/**
 * @swagger
 * /api/favourites/book:
 *   post:
 *     summary: Add a book to user's favourites
 *     tags: [Favourites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - bookId
 *             properties:
 *               userId:
 *                 type: string
 *               bookId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Favourite book added successfully
 */
router.post("/book", validateObjectIds(['body']), addFavouriteBook);

/**
 * @swagger
 * /api/favourites/book/{userId}:
 *   delete:
 *     summary: Remove a book from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: user ID
 *       - in: query
 *         name: bookId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the book
 *     responses:
 *       200:
 *         description: Favourite book removed successfully
 */
router.delete("/book/:userId", validateObjectIds(['params','query']), removeFavouriteBook);

/**
 * @swagger
 * /api/favourites/author:
 *   post:
 *     summary: Add an author to user's favourites
 *     tags: [Favourites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - authorId
 *             properties:
 *               userId:
 *                 type: string
 *               authorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Favourite author added successfully
 */
router.post("/author", validateObjectIds(['body']), addFavouriteAuthor);

/**
 * @swagger
 * /api/favourites/author/{userId}:
 *   delete:
 *     summary: Remove an author from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: user ID
 *       - in: query
 *         name: authorId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the Author
 *     responses:
 *       200:
 *         description: Favourite author removed successfully
 */
router.delete("/author/:userId", validateObjectIds(['params','query']), removeFavouriteAuthor);

export default router;
