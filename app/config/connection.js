const Sequelize = require("sequelize");

const connection = new Sequelize(
	"YOUR_DB_NAME",
	"YOUR_DB_USERNAME",
	"YOUR_DB_PASSWORD",
	{
		host: "localhost",
		port: 3306,
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

module.exports = connection;
