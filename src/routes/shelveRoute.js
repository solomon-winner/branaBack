import express from "express";
import { addShelve, removeShelve, removeWholeShelve, PayForShelve } from "../controllers/shelveController.js";

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
 *         price:
 *           type: number
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
 * /shelve:
 *   post:
 *     summary: Add a book to the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user adding the book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShelveInput'
 *     responses:
 *       201:
 *         description: Book added to shelve
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shelve'
 */
router.post("/", addShelve);

/**
 * @swagger
 * /shelve/pay:
 *   post:
 *     summary: Pay for the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: query
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
router.post("/pay", PayForShelve);

/**
 * @swagger
 * /shelve/remove/{userId}:
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
router.delete("/remove/:userId", removeWholeShelve);

/**
 * @swagger
 * /shelve/{id}:
 *   delete:
 *     summary: Remove a book from the shelve
 *     tags: [Shelve]
 *     parameters:
 *       - in: path
 *         name: id
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
router.delete("/:id", removeShelve);

export default router;
