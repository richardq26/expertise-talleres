const { DataTypes } = require("sequelize");
const db = require("../supports/dbConfig");

const Marca = db.define("Marca", {
  nombre: {
    type: DataTypes.STRING,
  },
});
module.exports = Marca;
