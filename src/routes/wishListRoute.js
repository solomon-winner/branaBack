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
 *        price:
 *          type: number
 *          description: The price of the book
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


router.post("/", addWishList);
router.delete("/:id", removeWishList);

export default router;

