const Catagory = require("../models/catagory");
const { errorHandler } = require("../utils");

exports.createCatagory = (req, res) => {
  console.log(req.body);
  const catagory = new Catagory(req.body);
  catagory.save((err, data) => {
    if (err) {
      return res.status(200).json({
        err: errorHandler(err),
        statusCode: 400,
      });
    }
    res.status(200).json({ data });
  });
};

exports.catagoryById = (req, res, next, id) => {
  Catagory.findById(id).exec((err, catagory) => {
    if (err || !catagory)
      return res.status(404).json({
        error: "Catagory not found",
      });
    req.catagory = catagory;
    next();
  });
};

exports.read = (req, res) => {
  const catagory = req.catagory;
  return res.json({
    catagory,
  });
};

exports.update = (req, res, id) => {
  const catagory = req.catagory;
  catagory.name = req.body.name;
  catagory.save((err, catagory) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    return res.status(200).json({
      message: "Catagory updated",
      catagory,
    });
  });
};

exports.list = (req, res) => {
  Catagory.find().exec((err, catagories) => {
    if (err) return res.status(404).json({ err: "catagories not found" });
    res.send(catagories);
  });
};

exports.remove = (req, res, id) => {
  const catagory = req.catagory;
  catagory.remove((err, catagory) => {
    if (err) return res.json(400).json({ err: errorHandler(err) });
    res.json({
      message: "catagory removed",
      catagory,
    });
  });
};
