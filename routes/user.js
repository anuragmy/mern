const express = require('express');
const router = express.Router();
const { signUpValidation } = require('../utils')


const { signUp } = require('../controllers/user');

router.post('/signup', signUpValidation, signUp);

module.exports = router;