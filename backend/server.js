const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
app.listen(3001);
app.use(bodyParser.json());

const login = require('./routes/login');
const register = require('./routes/register');
const user = require('./routes/user');

mongoose.connect(
    process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected to DB');
    }
);

// list all routes
app.use('/login', login);
app.use('/register', register);
app.use('/user', user);
