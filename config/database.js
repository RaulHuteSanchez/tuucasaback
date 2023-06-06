const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tucasaya', 'nuevo_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
