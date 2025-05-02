import express from "express";
import { addAccount, getAccounts, removeAccount, updateAccount } from "../controllers/bankAccountController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: BankAccount
 *  description: Endpoints for managing user bank accounts
 *
 */ 

/**
 * @swagger
 * components:
 *  schemas:
 *   BankAccount:
 *      type: object
 *      required:
 *        - userId
 *        - bankName
 *        - accountNo
 *      properties:
 *        userId:
 *          type: string
 *          description: The ID of the user
 *        bankName:
 *          type: string
 *          description: The name of the bank
 *        accountNo:
 *          type: string
 *          description: The account number
 */

/**
 * @swagger
 * /api/bank:
 *  post:
 *   summary: Add a new bank account
 *   tags: [BankAccount]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:   
 *       $ref: '#/components/schemas/BankAccount'
 *   responses:
 *    201:
 *       description: The bank account was successfully added
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BankAccount'
 *    400:
 *       description: Bad request, invalid data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 description: Error message
 *                 example: "User cannot have more than 10 bank accounts"
 *   
 */
router.post("/", addAccount);

/**
 * @swagger
 * /api/bank/{userId}:
*  get:
*   summary: Get all bank accounts for a user
*   tags: [BankAccount]
*   parameters:
*    - in: path
*      name: userId
*      required: true
*      description: ID of the user
*      schema:
*       type: string
*   responses:
*    200:
*     description: Successfully retrieved bank accounts
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         $ref: '#/components/schemas/BankAccount'
*    404:
*     description: User not found
*     content:
*      application/json:
*       schema:
*         type: object
*         properties:
*          message:
*           type: string
*           description: Error message
*           example: User not found
 */
router.get("/:userId", getAccounts);

/**
 * @swagger
 * /api/bank/{id}:
 *  put:
 *   summary: Update a bank account by ID
 *   tags: [BankAccount]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: ID of the bank account
 *      schema:
 *       type: string
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/BankAccount'
 *   responses:
 *    200:
 *      description: The bank account was successfully updated
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/BankAccount'
 *    404:
 *      description: Bank account not found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *                description: Error message
 *                example: "Account not found"
 */
router.put("/:id", updateAccount);
router.delete("/:id", removeAccount);

export default router;