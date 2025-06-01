import express from "express";
import { addShelve, removeABookFromShelve, removeWholeShelve, PayForShelve, getShelves, payForAllOnce } from "../controllers/shelveController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";

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
 * /api/shelve/:
 *   get:
 *     summary: Get all shelve items for a user
 *     tags: [Shelve]
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
router.get("/", AuthMiddleware, getShelves);
/**
 * @swagger
 * /api/shelve/:
 *   post:
 *     summary: Add a book to the shelve
 *     tags: [Shelve]
 *     parameters:
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
router.post("/", AuthMiddleware, validateObjectIds(['query']), addShelve);

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
router.put("/pay/:shelveId", validateObjectIds(['params']), PayForShelve);
/**
 * @swagger
 * /api/shelve/payAllOnce/:
 *   put:
 *     summary: Pay for all shelve items at once
 *     tags: [Shelve]
 *     responses:
 *       200:
 *         description: All shelve items paid for successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.put("/payAllOnce/",AuthMiddleware, payForAllOnce);
/**
 * @swagger
 * /api/shelve/remove/:
 *   delete:
 *     summary: Remove all shelve items for a user
 *     tags: [Shelve]
 *     responses:
 *       200:
 *         description: Entire shelve removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.delete("/remove/",AuthMiddleware, removeWholeShelve);

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
