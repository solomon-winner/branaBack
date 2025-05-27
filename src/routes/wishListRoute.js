import express from "express";
import {getWishList, addWishList, removeWishList} from "../controllers/wishListController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: WishList
 *  description: Endpoints for managing user wish list
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   WishList:
 *      type: object
 *      required:
 *        - title
 *        - bookId
 *      properties:
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
 * 
 */

/**
 * @swagger
 * /api/wishlist/:
 *  get:
 *   summary: Get wish list for a user
 *   tags: [WishList]
 *   responses:
 *    200:
 *     description: Successfully retrieved wish list
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/WishList'
 * 
 */
 
router.get("/", AuthMiddleware, getWishList);

/**
 * @swagger
 * /api/wishlist/:
 *  post:
 *   summary: Add a new book to the wish list
 *   tags: [WishList]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *           bookId:
 *            type: string
 *            description: The ID of the book to be added
 *   responses:
 *     201:
 *       description: The book was successfully added to the wish list
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/WishList'
 */
router.post("/", AuthMiddleware, validateObjectIds(['body']), addWishList);
/**
 * @swagger
 * /api/wishlist/:
 *  delete:
 *   summary: Remove a book from the wish list
 *   tags: [WishList]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             bookId:
 *               type: string
 *               description: The ID of the book to be removed
 *   responses:
 *     200:
 *       description: The book was successfully removed from the wish list
 */
router.delete("/", AuthMiddleware, validateObjectIds(['body']), removeWishList);

export default router;

