'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Houses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Houses.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: DataTypes.FLOAT,
    superficies: DataTypes.STRING,
    price: DataTypes.FLOAT,
    address: DataTypes.STRING,
    id_type_action:DataTypes.FLOAT, //crear tabla de tipo de acción
    id_type_condition:DataTypes.FLOAT,// crear tablar de tipo de condicones:
  }, {
    sequelize,
    modelName: 'Houses',
  });
  return Houses;
};