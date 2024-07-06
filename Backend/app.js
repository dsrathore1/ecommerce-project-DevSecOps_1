const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB.js");
const mainRoutes = require("./routes/routes.js");
const productRoutes = require("./routes/productRoutes.js");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//! Middleware to set routes
app.use(mainRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  //! Connecting to database
  // connectDB();
  console.log(`Your site is live on http://localhost:${PORT}`);

  //! Use this during Integration to check the application running
  setTimeout(() => {
    process.exit();
  }, 3000);
});
