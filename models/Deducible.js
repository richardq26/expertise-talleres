const { DataTypes } = require("sequelize");
const db = require("../supports/dbConfig");

const Deducible = db.define("Deducible", {
  text: {
    type: DataTypes.TEXT("long"),
  },
  deducible: {
    type: DataTypes.INTEGER,
  },
  copago: {
    type: DataTypes.INTEGER,
  },
  moneda: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  marca: {
    type: DataTypes.STRING,
  },
  taller: {
    type: DataTypes.STRING,
  },
});
module.exports = Deducible;
