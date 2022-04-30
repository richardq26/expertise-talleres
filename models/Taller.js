const { DataTypes } = require("sequelize");
const db = require("../supports/dbConfig");
const Distrito = require("./Distrito");
const Marca = require("./Marca");

const Taller = db.define("Taller", {
  tipo: {
    type: DataTypes.STRING,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  web: {
    type: DataTypes.STRING,
    defaultValue: "www.web.com",
  },
  distrito: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  distritoId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  marcaId: {
    type: DataTypes.INTEGER,
    default: null,
  },
  veha: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});
Marca.hasMany(Taller, {
  foreignKey: "marcaId",
});
Distrito.hasMany(Taller, {
  foreignKey: "distritoId",
});

// Taller.belongsTo(Marca);
module.exports = Taller;
