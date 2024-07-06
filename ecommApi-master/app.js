const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect.js");
const routes = require("./routes/routes.js");
const productsRoutes = require("./routes/products.js");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//! middleware to set router
app.use(routes);
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  //! Connecting to database
  connectDB();
  console.log(`Your site is live on http://localhost:${PORT}`);
});
