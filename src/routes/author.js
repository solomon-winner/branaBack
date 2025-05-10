import express from "express";
import { getAuthors, addAuthors, getAuthorById,updateAuthors,  deleteAuthor} from "../controllers/authorController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: API for managing authors
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         img:
 *           type: string
 *         bio:
 *           type: string
 *         birthDate:
 *           type: string
 *           format: date
 *         deathDate:
 *           type: string
 *           format: date
 *     AuthorInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         img:
 *           type: string
 *         bio:
 *           type: string
 *         birthDate:
 *           type: string
 *           format: date
 *         deathDate:
 *           type: string
 *           format: date
 */

/**
 * @swagger
 * /api/authors:
 *   get:
 *     summary: Get all authors
 *     tags: [Authors]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of authors per page
 *     responses:
 *       200:
 *         description: List of authors fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Author'
 */
router.get("/", getAuthors);

/**
 * @swagger
 * /api/authors:
 *   post:
 *     summary: Add a new author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthorInput'
 *     responses:
 *       201:
 *         description: Author added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 */
router.post("/", addAuthors);
/**
 * @swagger
 * /api/authors/{id}:
 *  get:
 *    summary: Get an author by ID
 *    tags: [Authors]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The ID of the author to retrieve
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: An author object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Author'
 *      404:
 *        description: Author not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  description: Error message
 *                  example: "Author not found"
 * 
 */
router.get("/:id", validateObjectIds(['params']),getAuthorById);
/**
 * @swagger
 * /api/authors/{id}:
 *   put:
 *     summary: Update an existing author
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Author ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthorInput'
 *     responses:
 *       200:
 *         description: Author updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 */
router.put("/:id", validateObjectIds(['params']),updateAuthors);
/**
 * @swagger
 * /api/authors/{id}:
 *   delete:
 *     summary: Delete an author by ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Author ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Author deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.delete("/:id", validateObjectIds(['params']),deleteAuthor);

export default router;
