const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const connection = require("./connection");

// Render home template on '/' route
router.get("/", (req, res) => {
	res.render("home");
});

// Add routes for '/crime', '/bio', and '/tips' here

module.exports = router;
