const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parishioners', {
    id_parroquia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_municipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'municipalities',
        key: 'id_municipio'
      }
    },
    parroquia: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Parishioners',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_parroquia" },
        ]
      },
      {
        name: "id_municipio",
        using: "BTREE",
        fields: [
          { name: "id_municipio" },
        ]
      },
    ]
  });
};
