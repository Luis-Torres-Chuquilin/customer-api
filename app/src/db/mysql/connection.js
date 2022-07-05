/** @format */
const Sequelize = require("sequelize");

const config = {
  host: "localhost",
  username: "root",
  password: "root",
  port: 3306,
  database: "PlansDb",
  dialect: "mysql",
};

let sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: config.password,
  port: config.port,
  database: config.database,
  dialect: "mysql",
});

module.exports = sequelize;
