const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Generar el hash para guardar la contraseña encriptada
module.exports.createHash = (password) => {
    try {
        const encrypted = bcrypt.hashSync(password, 10);
        return encrypted;
    } catch (error) {
        throw new Error('Failed to hash password');
    }
};

//Token de sesion
module.exports.createToken = (data) => {
    try {
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
        return accessToken;
    } catch (error) {
        throw new Error('Failed to create token');
    }
};

// Función para comparar el hash de la contraseña
module.exports.compareHash = async (userBBDD, userRequest) => {
  try {

    if (!userBBDD) { return false }
    let compare = bcrypt.compareSync(userBBDD.password, userRequest.password);
    if (compare) {
      let token = jwt.sign({user: userBBDD}, process.env.TOKEN, { expiresIn: '2 days'})
        return token;
    } else {
      return false
    }
  } catch (error) {
    console.log(error);
  }
};

// Verificar el token
module.exports.verifierToken = (req, res, next) => {
  try {
    const token = req.headers.tokenauthorization;
    console.log(req.headers.tokenauthorization)
    jwt.verify(token, process.env.TOKEN);
    next();
  } catch (error) {
    console.log(error);
  }
};