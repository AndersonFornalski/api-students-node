const sequelize = require("sequelize");
const dbConfig = require("../config/db");
const Student = require("../model/Student"); 

const connection = new sequelize(dbConfig);

Student.init(connection);

module.exports = connection;