const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/auth', require('./src/routes/auth'));
app.use('/user', require('./src/routes/user'));

module.exports = app;
