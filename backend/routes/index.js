const express = require("express");

const router = express.Router();

const login = require('./login');
const register = require('./register');
const user = require('./user');

// list all routes
router.post('/login', login);
router.post('/register', register);
router.post('/user', user);

module.exports = router;
