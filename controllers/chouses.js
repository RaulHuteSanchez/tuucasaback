const {Houses} = require('../models/index.js');

exports.module.newHouse = async (req, res) => {
  try {
    const house = req.body;
    await Houses.create(newUser);
    res.status(200).json({ data: null, message: 'creado con éxito!'});
  } catch (error) {
    console.error(error); // Aquí registramos el error
    res.status(400).json({
      message: 'No se ha podido crear un nueva casa.',
    });
  }
};

exports.module.updateHouse = async (req, res) => {
  console.log(data);
  return data;
};