const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    maxlength: 32,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  shipping: {
    type: Boolean,
    required: false,
  },
  quantity: {
    type: Number,
  },
  catagory: {
    type: ObjectId,
    ref: 'Catagory',
    required: true,
  },
}, { timestamps: true });

const Product = mongoose.model("product", productSchema);
module.exports = Product;