import express from "express";
import { addRecommendedBooks, removeRecommendedBooks } from "../controllers/recommendedBooksController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: RecommendedBooks
 *   description: Endpoints for managing recommended books
 */

/**
 * @swagger
 * /api/recommendedBooks:
 *    post:
 *      summary: Add recommended books for a user
 *      tags: [RecommendedBooks]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                  description: ID of the user
 *                  required: true
 *                bookId:
 *                  type: string
 *                  description: ID of the book
 *                  required: true
 *                reason:
 *                  type: string
 *                  description: Reason for recommendation
 *                  required: true
 *      responses:
 *        200:
 *          description: Recommended books added successfully
 *        400:
 *          description: Bad request, invalid input data
 * 
 */
 
 router.post("/", addRecommendedBooks);

/**
 * @swagger
 * /api/recommendedBooks/{id}:
 *    delete:
 *      summary: Remove recommended books for a user
 *      tags: [RecommendedBooks]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID of the recommended book to remove
 *          schema:
 *           type: string
 *      requestBody:    
 *        required: true
 *        content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              bookId:
 *                type: string
 *                description: ID of the book to remove from recommendations
 *                required: true
 *    responses:
 *      200:
 *        description: Recommended book removed successfully
 *      400:
 *        description: Bad request, invalid input data
 */
router.delete("/:id", removeRecommendedBooks);

export default router;

