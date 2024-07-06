const express = require("express");

const mainRoutes = express.Router();

//! Home Route
mainRoutes.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "Your site is working properly",
    });
  } catch (error) {
    if (error) throw error;
  }
});

module.exports = mainRoutes;
