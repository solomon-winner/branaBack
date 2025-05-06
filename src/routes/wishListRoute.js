import express from "express";
import {getWishList, addWishList, removeWishList} from "../controllers/wishListController.js";

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
 * /api/wishList/{userId}:
 *  get:
 *   summary: Get wish list for a user
 *   tags: [WishList]
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *      description: ID of the user
 *      schema:
 *       type: string
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
 
router.get("/:userId", getWishList);

/**
 * @swagger
 * /api/wishList/{userId}:
 *  post:
 *   summary: Add a new book to the wish list
 *   tags: [WishList]
 *   parameters:
 *   - in: path
 *     name: userId
 *     required: true
 *     description: ID of the user
 *     schema:
 *       type: string
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/WishList'
 *   responses:
 *     201:
 *       description: The book was successfully added to the wish list
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WishList'
 */
router.post("/:userId", addWishList);
/**
 * @swagger
 * /api/wishList/{userId}:
 *  delete:
 *   summary: Remove a book from the wish list
 *   tags: [WishList]
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *      description: ID of the user
 *      schema:
 *       type: string
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
router.delete("/:userId", removeWishList);

export default router;

