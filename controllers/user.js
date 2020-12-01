const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to sign the token
const expressJwt = require('express-jwt'); // for auth
const { hashPassword, errorHandler, compareHashedPassword } = require('../utils');
require('dotenv').config();

exports.signUp = async (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword(req.body.password)
  }
  const user = new User(userData);
  await user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: errorHandler(err)
      })
    }
    return res.status(200).json({
      message: 'signed in',
      user
    })
  })
}


exports.signIn = async (req, res) => {
  const { email, password } = req.body;


  // check for user exists

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User does not exists',
      })
    }

    // compare password
    const result = compareHashedPassword(password, user.password);
    if (result) {
      // create jwt 
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      //set token as 't' om cookie
      res.cookie('t', token, { expire: new Date() + 9999 });
      // send user and toke to client
      const { _id, name, email, roles } = user;
      return res.status(200).json({ token, user: { _id, email, name, roles } })
    }
    else {
      return res.status(401).json({
        err: 'Password mismatch'
      })
    }
  });
}