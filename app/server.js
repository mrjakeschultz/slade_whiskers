const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

const app = express();

// Connect to the database
const connection = require("./connection");

connection
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

// Set static files directory
app.use(express.static(path.join(__dirname, "public")));

// Set view engine to handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Mount HTML routes
const htmlRoutes = require("./routes/html-routes");
app.use("/", htmlRoutes);

// Mount API routes
const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

// Start the server
app.listen(3001, () => {
	console.log("Server listening on port 3000");
});
