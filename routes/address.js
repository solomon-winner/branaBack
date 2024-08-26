import express from 'express';
import { createAddress, deleteAddress, getAddress, updateAddress } from '../controllers/address.js';

const router = express.Router();

router.post('/create', createAddress);
router.get('/get', getAddress);
router.put('/update/:id', updateAddress);
router.delete('/delete/:id', deleteAddress);