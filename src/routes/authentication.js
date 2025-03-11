import express from "express"
import {login, register} from "../controllers/authController.js"

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUser:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *         - phoneNo
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         firstName:
 *           type: string
 *           description: The first name of the user
 *         lastName:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password for the user account
 *       example:
 *         firstName: John
 *         lastName: Doe
 *         email: user@example.com
 *         password: 123456
 */

/**
 * @swagger
 * /api/authentication/login:
 *  post:
 *    summary: Login to the system
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: "user@example.com"
 *              password:
 *                type: string
 *                example: "password123"
 *            required:
 *               - email
 *               - password
 *    responses:
 *       "200":
 *         description: A user has successfully logged in
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            properties:
 *              token:
 *                type: string
 *                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *              user:
 *                type: object
 *                properties:
 *                  _id:
 *                     type: string
 *                     example: "60f3c2c2b3c1e80015c4f2c4"
 *                  firstName:
 *                     type: string
 *                     example: "firstname"
 *                  lastName:
 *                     type: string
 *                     example: "lastname"
 *                  email:
 *                     type: string
 *                     example: "user@example.com"
 *                  createdAt:
 *                     type: string
 *                     example: "2021-07-18T14:00:00.000Z"
 *                  updatedAt:
 *                     type: string
 *                     example: "2021-07-18T14:00:00.000Z"
 *       "400":
 *          description: Invalid email and Password
 *       "500":
 *          description: Internal Server Error
 */
router.post("/login", login);


/**
 * @swagger
 * /api/authentication/register:
 *   post:
 *     summary: Register a new verifier or system-admin
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               phoneNo:
 *                type: string
 *                example: "09012345678"
 *               altPhoneNo:
 *                 type: string 
 *                 example: "09012345678"
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - phoneNo
 *               - altPhone
 *     responses:
 *       "201":
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d0fe4f5311236168a109ca"
 *                 firstName:
 *                   type: string
 *                   example: "John"
 *                 lastName:
 *                   type: string
 *                   example: "Doe"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 phoneNo:
 *                   type: string
 *                   example: "09012345678"
 *                 altPhoneNo:
 *                   type: string
 *                   example: "09012345678"
 *       "400":
 *         description: User already exists
 *       "500":
 *         description: Internal Server Error
 */
router.post("/register", register);

export default router;