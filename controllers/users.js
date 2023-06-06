const { User} = require('../models/index.js');
const { Op, DATE } = require("sequelize");
const hashing = require('../middleware/login.js');

// Crear usuario
module.exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    newUser.role = 'user';
    newUser.password = hashing.createHash(newUser.password);
    await User.create(newUser);
    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(400).json({
      message: 'No se ha podido generar un nuevo usuario.',
    });
  }
};

// Crear administrador
module.exports.createAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const newAdmin = req.body;
    newAdmin.password = hashing.createHash(newAdmin.password);
    await Admin.create(newAdmin);
    res.status(200).json({ Admin: newAdmin });
  } catch (error) {
    res.status(400).json({
      message: 'No se ha podido generar un nuevo administrador.',
    });
  }
};

// Buscar usuario por ID
module.exports.searchUser = (req, res) => {
  try {
    User.findByPk(req.params.id)
      .then((user) => {
        if (!user) res.status(200).send('El usuario no existe');
        res.status(200).json({ data: user });
      });
  } catch (error) {
    res.json({
      message: 'Usuario no encontrado.',
      errors: error,
      status: 400
    });
  }
};

// Buscar todos los usuarios
module.exports.searchAll = async (req, res) => {
  try {
    let users = await User.findAll({});
    res.status(200).json({ Data: users });
  } catch (error) {
    res.json({
      message: 'No eres admin.',
      errors: error,
    });
  }
};

// Eliminar usuario por ID
module.exports.deleteUser = async (req, res) => {
  try {
    console.log(req.query);
    let arr = req.query.id;
    console.log(arr);
    await User.destroy({
      where: {
        id: arr
      }
    });
    res.status(200).json({ Data: 'El usuario se ha eliminado con éxito' });
  } catch (error) {
    res.status(400).send({
      message: 'El usuario no se ha podido eliminar',
      status: 400
    });
  }
};

// Inicio de sesión
module.exports.login = async (req, res) => {
  try {
    let hashDecoded = await hashing.compareHash(req.body);
    console.log(hashDecoded);
    res.status(200).json({ hashDecoded });
  } catch (error) {
    res.json({
      message: 'Correo electrónico o contraseña denegados.',
      errors: error,
      status: 400
    });
  }
};
