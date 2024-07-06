const express = require("express");
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products.js");

const productRoutes = express.Router();

productRoutes.route("/", getAllProducts);
productRoutes.route("/testing", getAllProductsTesting);

module.exports = productRoutes;
