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
 * /api/users:
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
 * /api/users/{userId}:
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
/**
 * @swagger
 * /api/users:
 *  get:
 *   summary: Get all users
 *   tags: [User]
 *   parameters:
 *    - in: query
 *      name: page
 *      required: false
 *      description: Page number for pagination
 *      schema:
 *       type: integer
 *       default: 1
 *    - in: query
 *      name: limit
 *      required: false
 *      description: Number of users per page
 *      schema:
 *       type: integer
 *       default: 10
 *    - in: query
 *      name: role
 *      required: false
 *      description: Role of the users to filter by
 *      schema:
 *       type: string
 *       enum: [admin, user]
 *       default: user
 *   responses:
 *    200:
 *     description: Users retrieved successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         metaData:
 *          type: object
 *          properties:
 *           totalPages:
 *            type: integer
 *            description: Total number of pages
 *           totalUsers:
 *            type: integer
 *            description: Total number of users
 *           currentPage:
 *            type: integer
 *            description: Current page number
 *         users:
 *          type: array
 *          items:
 *           $ref: '#/components/schemas/User'
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: Error message
 */
router.get("/", getUsers);
/**
 * @swagger
 * /api/users/{userId}:
 *  put:
 *   summary: Update a user by ID
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *      description: ID of the user
 *      schema:
 *       type: string
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: User updated successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 */

router.put("/:userId", updateUser);
/**
 * @swagger
 * /api/users/{userId}:
 *  delete:
 *   summary: Delete a user by ID
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: userId
 *      required: true
 *      description: ID of the user
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: User deleted successfully
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          description: Success message
 *          example: User deleted successfully
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
router.delete("/:userId", deleteUser);

export default router;

