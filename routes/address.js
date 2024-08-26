import express from 'express';
import { addAddress, getAddress, updateAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/create', addAddress);
router.get('/get', getAddress);
router.put('/update/:id', updateAddress);

export default router;