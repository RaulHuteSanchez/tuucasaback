'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Aquí puedes agregar cualquier otra asociación que necesites
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: DataTypes.FLOAT,
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      id_group_role: DataTypes.STRING,
      age: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      facebook: DataTypes.STRING,
      twitter: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
