import express from "express";
import { addShelve, removeABookFromShelve, removeWholeShelve, PayForShelve, getShelves, payForAllOnce } from "../controllers/shelveController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Shelve
 *   description: API for managing the user's book shelve
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ShelveInput:
 *       type: object
 *       required:
 *         - bookId
 *         - bookCount
 *         - price
 *       properties:
 *         bookId:
 *           type: string
 *         bookCount:
 *           type: integer
 *         to:
 *           type: string
 *           description: Indicates whether the book is for the user ("me") or someone else
 *     Shelve:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: string
 *         book:
 *           type: string
 *         bookCount:
 *           type: integer
 *         price:
 *           type: number
 *         to:
 *           type: string
 */

/**
 * @swagger
 * /api/shelve/{userId}:
 *   get:
 *     summary: Get all shelve items for a user
 *     tags: [Shelve]
 *     parameters:
 *        - in: path
 *          name: userId
 *          required: true
 *          schema:
 *           type: string
 *          description: ID of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved shelve items
 *         content:
 *          application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Shelve'
 *       404:
 *         description: Shelve not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Shelve not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get("/:userId", validateObjectIds(['params']), getShelves);
/**
 * @swagger
 * /api/shelve/{id}:
 *   post:
 *     summary: Add a book to the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user adding the book
 *       - in: query
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the book
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *         description: ID of the user gifted to
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              bookCount:
 *               type: integer
 *               description: Number of books to add to the shelve
 *     responses:
 *       201:
 *         description: Book added to shelve
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.post("/:id", validateObjectIds(['params','query']),addShelve);

/**
 * @swagger
 * /api/shelve/pay/{shelveId}:
 *   post:
 *     summary: Pay for the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: shelveId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shelve to pay for
 *     responses:
 *       200:
 *         description: Shelve payment processed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.post("/pay/:shelveId", validateObjectIds(['params']),PayForShelve);
/**
 * @swagger
 * /api/shelve/payAllOnce/{userId}:
 *   post:
 *     summary: Pay for all shelve items at once
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: All shelve items paid for successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.post("/payAllOnce/:userId", validateObjectIds(['params']),payForAllOnce);
/**
 * @swagger
 * /api/shelve/remove/{userId}:
 *   delete:
 *     summary: Remove all shelve items for a user
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Entire shelve removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.delete("/remove/:userId", validateObjectIds(['params']),removeWholeShelve);

/**
 * @swagger
 * /api/shelve/{shelveId}:
 *   delete:
 *     summary: Remove a book from the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: shelveId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the shelve item to remove
 *     responses:
 *       200:
 *         description: Book removed from shelve
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.delete("/:shelveId", validateObjectIds(['params']), removeABookFromShelve);

export default router;
