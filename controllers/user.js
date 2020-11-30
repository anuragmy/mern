const User = require('../models/user');
const { hashPassword, errorHandler } = require('../utils');

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