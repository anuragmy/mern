const Catagory = require('../models/catagory');
const { errorHandler } = require('../utils');

exports.createCatagory = (req, res) => {
  const catagory = new Catagory(req.body);
  catagory.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      })
    }
    res.status(200).json({ data });
  });
}