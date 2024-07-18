// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, authenticateUser, addIncome, addExpense, logoutUser } from '../Controllers/UserController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/authenticate', authenticateUser);
router.post('/addIncome', addIncome);
router.post('/addExpense', addExpense);
router.post('/logout', logoutUser);

export default router;
