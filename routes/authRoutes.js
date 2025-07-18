
// Defines authentication-related routes: /register, /login, etc.
// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', registerUser);

module.exports = router;
