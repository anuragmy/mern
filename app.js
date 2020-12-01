const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const catagoryRoutes = require('./routes/catagory');

const port = process.env.PORT || 3001;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(expressValidator());

// routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', catagoryRoutes);

app.listen(port, () => `server running on ${port}`);
