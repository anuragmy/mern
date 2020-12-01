const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('./db');
const userRoute = require('./routes/user');

const port = process.env.PORT || 3001;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(expressValidator());

// routes
app.use('/api', userRoute);
app.listen(port, () => `server running on ${port}`);
