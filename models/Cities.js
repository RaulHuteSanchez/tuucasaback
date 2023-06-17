const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cities', {
    id_ciudad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states',
        key: 'id_estado'
      }
    },
    ciudad: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    capital: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Cities',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ciudad" },
        ]
      },
      {
        name: "id_estado",
        using: "BTREE",
        fields: [
          { name: "id_estado" },
        ]
      },
    ]
  });
};
