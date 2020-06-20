const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.listen(3001);

// list all routes
const login = require('./routes/login');
const register = require('./routes/register');
const user = require('./routes/user');


app.use('/login', login);
app.use('/register', register);
app.use('/user', user);
