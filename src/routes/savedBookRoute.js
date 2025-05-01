import express from "express";
import { getSavedBooks,addSavedBooks, removeSavedBooks } from "../controllers/savedBooksController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *  name: SavedBooks
 *  description: Endpoints for managing user saved books
 */
/**
 * @swagger
 * components:
 *    schemas:
 *      SavedBook:
 *       type: object
 *       required:
 *        - title
 *        - bookId
 *       properties:
 *        title:
 *          type: string
 *          description: The title of the book
 *        bookId:
 *          type: string
 *          description: The ID of the book
 *        img:
 *          type: string
 *          description: The image of the book
 *        author:
 *          type: string
 *          description: The author of the book
 */ 

/**
 * @swagger
 * /api/savedBooks/{userId}:
 *   get:
 *     summary: Get saved books for a user
 *     tags: [SavedBooks]
 *     parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        description: ID of the user
 *        schema:
 *         type: string
 *     responses:
 *      200:
 *        description: Successfully retrieved saved books
 *        content:
 *         application/json:
 *          schema:
 *           type: array
 *           items:
 *            $ref: '#/components/schemas/SavedBook'
 * 
 */ 
router.get("/:userId", getSavedBooks);
/**
 * @swagger
 * /api/savedBooks:
 *   post:
 *    summary: Add a new saved book
 *    tags: [SavedBooks]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *              userId:
 *                type: string
 *                description: The ID of the user
 *              bookId:
 *                type: string
 *                description: The ID of the book to be saved
 *              example:
 *                userId: "1234567890"
 *                bookId: "0987654321"
 *    responses:
 *      201:
 *       description: Successfully added saved book
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavedBook'
 * 
 */
router.post("/", addSavedBooks);
/**
 * @swagger
 * /api/savedBooks/{userId}:
 *   delete:
 *     summary: Remove a saved book for a user
 *     tags: [SavedBooks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: string
 *                 description: The ID of the book to remove
 *     responses:
 *       200:
 *         description: Successfully removed saved book
 */

router.delete("/:id", removeSavedBooks);

export default router;

