const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User} = require('../models/index.js');

// Generar el hash para guardar la contraseña encriptada
module.exports.createHash = (password) => {
  const encrypted = bcrypt.hashSync(password, 10);
  return encrypted;
};

// Función para comparar el hash de la contraseña
module.exports.compareHash = async (objectUser) => {
  try {
    const user = await User.findOne({ where: { mail: objectUser.mail } });
    if (!user) {
      return false;
    }
    const compare = bcrypt.compareSync(objectUser.password, user.password);
    if (compare) {
      const token = jwt.sign(
        {
          data: user.id,
          role: user.role,
        },
        process.env.TOKEN,
        { expiresIn: '2 days' }
      );
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

// Verificar el token
module.exports.verificarToken = (req, res, next) => {
  try {
    const token = req.headers.token;
    jwt.verify(token, process.env.TOKEN);
    next();
  } catch (error) {
    console.log(error);
  }
};

// Cerrar sesión
module.exports.logout = (req, res, next) => {
  // No es necesario implementar nada aquí si solo se utiliza jsonwebtoken
};
