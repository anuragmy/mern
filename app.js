const express = require('express');
const app = express();
require('dotenv').config();
require('./db');
const userRoute = require('./routes/user');
const port = process.env.PORT || 3000;

app.use('/api', userRoute);
app.listen(port, () => `server running on ${port}`);
