const sequelize = require("sequelize");
const dbConfig = require("../config/db");

const connection = new sequelize(dbConfig);

module.exports = connection;