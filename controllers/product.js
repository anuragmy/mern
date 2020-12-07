const Product = require('../models/product');
const Catagory = require('../models/catagory');
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
  Product.findById(id)
    .exec((err, data) => {
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
  Catagory.findById(req.product.catagory).exec((err, catagory) => {
    return res.json({
      catagory,
      product: req.product
    });
  });
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
exports.list = (req, res) => {
  const order = req.query.order ? req.query.order : 'asc';
  const limit = req.query.limit ? req.query.limit : 4;
  const sortBy = req.query.sortBy ? req.query.sortBy : '_id';

  // Product.find().exec((err, products) => {
  //   if (err) return res.status(404).json({ err: 'Products not found' })
  //   res.send(products);
  // })

  Product.find({}, { photo: 0 })
    // .populate('catagory')
    // .sort([[sortBy, order]])
    .exec((err, data) => {
      if (err) return res.status(404).json({ err });
      res.send(data);
    });
}

exports.related = (req, res) => {
  Product.find({ _id: { $ne: req.product }, catagory: req.product.catagory }, { photo: 0 })
    .exec((err, data) => {
      if (err) return res.status(404).json({ err });
      res.send(data);
    });
}

exports.listCatagories = (req, res) => {
  Product.distinct('catagory', {}, (err, catagories) => {
    if (err) return res.status(400).json({ err: 'Catagories not found' });
    res.send(catagories);
  });
}