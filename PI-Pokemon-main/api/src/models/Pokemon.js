const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  // defino el modelo de pokemons
  sequelize.define('pokemon', {

    //id
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
//name
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
//hp
  hp: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },
//attack
  attack: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },
//defense
  defense: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },
//speed
  speed: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },

//height
  height: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },

  //weight
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: '50'
  },

  createdInDb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },

},
{ 
  timestamps: false, 
  freezeTableName: true,
}
);
};
