const bcrypt = require('bcrypt');

// Generar el hash para guardar la contraseña encriptada
module.exports.createHash = (password) => {
  try {
      const encrypted = bcrypt.hashSync(password, 10);
      return encrypted;
  } catch (error) {
      throw new Error('Failed to hash password');
  }
};