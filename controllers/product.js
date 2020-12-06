const Product = require('../models/product');
const fs = require('fs');
const formidable = require('formidable');
const _ = require('lodash');
const { errorHandler } = require('../utils');


exports.create = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        err: 'Image could not be uploadad',
      })
    }
    const { name, description, shipping, price, quantity } = fields;
    if (!name || !description || !shipping || !price || !quantity) {
      return res.status(400).json({
        err: 'All Fields required'
      })
    }
    let product = new Product(fields);
    if (files.photo) {
      if (files.photo.size > 100000) {
        return res.json({
          err: 'File should be less than 1 mb',
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          err: errorHandler(err),
        })
      }
      res.json(result);
    })

  })

}

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(404).json({
        err: 'Product not found',
      })
    }
    req.product = data;
    next();
  })
}

exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
}

exports.remove = (req, res, next) => {
  const product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(500).json({
        err: errorHandler(err),
      })
    }
    res.status(200).json({
      deletedProduct,
      message: 'Product deleted!'
    })
    next();
  })
}


exports.update = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        err: 'Image could not be uploadad',
      })
    }
    const { name, description, shipping, price, quantity } = fields;
    if (!name || !description || !shipping || !price || !quantity) {
      return res.status(400).json({
        err: 'All Fields required'
      })
    }
    let product = req.product;
    _.extend(product, fields);
    if (files.photo) {
      if (files.photo.size > 100000) {
        return res.json({
          err: 'File should be less than 1 mb',
        })
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          err: errorHandler(err),
        })
      }
      res.json(result);
    })

  })

}