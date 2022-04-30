const { DataTypes } = require("sequelize");
const db = require("../supports/dbConfig");

const Distrito = db.define("Distrito", {
  nombre: {
    type: DataTypes.STRING,
  },
  ubigeo: {
    type: DataTypes.STRING,
    default: null,
  },
});
module.exports = Distrito;
