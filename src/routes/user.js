import express from "express";
import { getUsers, getAUserById, addUser,updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *  name: User
 *  description: Endpoints for managing users
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *     type: object
 *     required:
 *      - firstName
 *      - lastName
 *      - email
 *      - password
 *     properties:
 *      firstName:
 *        type: string
 *        description: The first name of the user
 *      lastName:
 *        type: string
 *        description: The last name of the user
 *      email:
 *        type: string
 *        description: The email of the user
 *      password:
 *        type: string
 *        description: The password of the user
 *      profilePicture:
 *        type: string
 *        description: The profile picture of the user
 *      phoneNo:
 *        type: string
 *        description: The phone number of the user
 *      altPhoneNo:
 *        type: string
 *        description: The alternative phone number of the user
 *     
 */ 

/**
 * @swagger
 * /api/user:
 *  post:
 *   summary: Add a new user
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *      description: User created successfully
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/User'
 *    400:
 *       description: Bad request
 */
router.post("/", addUser);

/**
 * @swagger
 * /api/user/{userId}:
 *  get:
 *   summary: Get a user by ID
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *      description: ID of the user
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: User retrieved successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
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
 *  
 * 
 */ 
router.get("/:userId", getAUserById);
router.get("/", getUsers);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;

