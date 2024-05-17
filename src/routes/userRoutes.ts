// src/routes/userRoutes.ts
import express from 'express';
import { createUser, deleteUser, updateUser, getAllUser } from '../controllers/userController';

const router = express.Router();

router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', getAllUser); // internal testing only

export default router;
