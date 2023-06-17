const { Users} = require('../models/index.js');
const hashing = require('../middleware/authentication.js');

// Registro de usuarios
module.exports.registerUser = async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = hashing.createHash(newUser.password);
    await Users.create(newUser);

    const tokenData = {
      id: newUser.id,
      email: newUser.email
    };
    const token = hashing.createToken(tokenData);
      res.status(200).json({ accessToken: token });
  } catch (error) {
    console.error(error); // Aquí registramos el error
    res.status(400).json({
      message: 'No se ha podido generar un nuevo usuario.',
    });
  }
};

// Inicio de sesión
module.exports.login = async (req, res) => {
  try {
    const userRequest = req.body;
    const userBBDD = await Users.findOne({ where: { email: userRequest.email } });
    let token = await hashing.compareHash(userBBDD, userRequest);

    res.status(200).json({ token: token });
  } catch (error) {
    res.json({
      message: 'Correo electrónico o contraseña denegados.',
      errors: error,
      status: 400
    });
  }
};

/*
---------------
get one user
---------------
*/

// Buscar usuario por ID
module.exports.searchUser = async (req, res) => {
  try {
    let user = await Users.findByPk(req.params.id)

    if (!user) {
      res.status(200).send('El usuario no existe');
    } else {
      res.status(200).json({ data: user });
    }
  } catch (error) {
    res.json({
      message: 'Usuario no encontrado.',
      errors: error,
      status: 400
    });
  }
};

// // Crear administrador
// module.exports.createAdmin = async (req, res) => {
//   try {
//     console.log(req.body);
//     const newAdmin = req.body;
//     newAdmin.password = hashing.createHash(newAdmin.password);

//     const existingUser = await User.findOne({ where: { email: newUser.email } });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Ya existe un usuario con este correo electrónico.' });
//     }

//     await Admin.create(newAdmin);
//     res.status(200).json({ Admin: newAdmin });

//   } catch (error) {
//     res.status(400).json({
//       message: 'No se ha podido generar un nuevo administrador.',
//     });
//   }
// };



// // Buscar todos los usuarios
// module.exports.searchAll = async (req, res) => {
//   try {
//     let users = await User.findAll({});
//     res.status(200).json({ Data: users });
//   } catch (error) {
//     res.json({
//       message: 'No eres admin.',
//       errors: error,
//     });
//   }
// };

// // Eliminar usuario por ID
// module.exports.deleteUser = async (req, res) => {
//   try {
//     console.log(req.query);
//     let arr = req.query.id;
//     console.log(arr);
//     await User.destroy({
//       where: {
//         id: arr
//       }
//     });
//     res.status(200).json({ Data: 'El usuario se ha eliminado con éxito' });
//   } catch (error) {
//     res.status(400).send({
//       message: 'El usuario no se ha podido eliminar',
//       status: 400
//     });
//   }
// };