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
router.get("/category", getFavouriteCategory);

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
 *     parameters:
 *      - in: query
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
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
router.post("/category", validateObjectIds(['query']), addFavouriteCategory);

/**
 * @swagger
 * /api/favourites/category/{id}:
 *   delete:
 *     summary: Remove a category from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite category removed successfully
 */
router.delete("/category/:id", validateObjectIds(['query']), removeFavouriteCategory);

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
 * /api/favourites/book/{id}:
 *   delete:
 *     summary: Remove a book from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Book ID
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite book removed successfully
 */
router.delete("/book/:id", validateObjectIds(['query']), removeFavouriteBook);

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
 * /api/favourites/author/{id}:
 *   delete:
 *     summary: Remove an author from user's favourites
 *     tags: [Favourites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Author ID
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Favourite author removed successfully
 */
router.delete("/author/:id", validateObjectIds(['query']), removeFavouriteAuthor);

export default router;
