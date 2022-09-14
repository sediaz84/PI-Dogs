const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    heightMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weightMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weightMax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span_min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    image: {
      type: DataTypes.STRING(20000),
      allowNull: true
    }  
  }, {
    timestamps: false,
    freezeTableName: true,
  });
};
