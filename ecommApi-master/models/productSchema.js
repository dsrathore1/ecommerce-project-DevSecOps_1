const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    colors: {
      type: Array,
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } //* It will help you to track the creation and Updation
);

//! mongoose.models requires if 'Products' document is already exists so it's prevent from the error
const productModel =
  mongoose.models || mongoose.model("Product", productSchema);

//* Always stay consistent with variable declaration: if you using camelCase use that all in project else PascalCase same to that
module.exports = productModel;
