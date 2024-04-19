// La funsion define el modelo
// Luego le injectamos la conexion a sequelize.


const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

  },
  {
      timestamps: false,
      freezeTableName: true,
  }
  );
};