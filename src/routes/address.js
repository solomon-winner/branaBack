import express from 'express';
import { addAddress, getAddress, updateAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/', addAddress);
router.get('/', getAddress);
router.put('/:id', updateAddress);

export default router;