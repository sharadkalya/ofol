const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.listen(3001);

app.get('/dummy', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const data = {
        hello: "ofol test"
    };
    res.json(JSON.stringify(data));
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const data = {
        hello: "ofol test"
    };
    res.json(JSON.stringify(data));
});
