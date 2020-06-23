const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
app.listen(3001);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const routes = require('./routes');

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

app.use('/api', routes);
