import express from "express";
import { addRecommendedBooks, removeRecommendedBooks, getRecommendedBooks } from "../controllers/recommendedBooksController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

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
 *   post:
 *     summary: Add recommended books for a user
 *     tags: [RecommendedBooks]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *       - in: query
 *         name: bookId
 *         required: true
 *         description: ID of the book
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: Reason for recommendation
 *     responses:
 *       200:
 *         description: Recommended books added successfully
 *       400:
 *         description: Bad request, invalid input data
 */

 router.post("/", validateObjectIds(['query']), addRecommendedBooks);
/**
 * @swagger
 * /api/recommendedBooks:
 *    get:
 *      summary: Get recommended books for a user
 *      tags: [RecommendedBooks]
 *      parameters:
 *        - in: query
 *          name: userId
 *          schema:
 *             type: string
 *             required: true
 *             description: ID of the user
 *      responses:
 *         200:
 *           description: Recommended books retrieved successfully
 *         400:
 *           description: Bad request, invalid input data
 */

 router.get("/", validateObjectIds(['params']),  getRecommendedBooks);
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
 *          description: ID of the user
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
 *      responses:
 *       200:
 *        description: Recommended book removed successfully
 *       400:
 *        description: Bad request, invalid input data
 */
router.delete("/:id", validateObjectIds(['params', 'body']), removeRecommendedBooks);

export default router;

