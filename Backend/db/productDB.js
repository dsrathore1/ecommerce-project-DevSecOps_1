const connectDB = require("./db/connectDB.js");
const Product = require("../models/productSchema.js");
const ProductJson = require("./product.json");

require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
