const express = require('express');
const syncDB = require('./synDatabase.js');
const User = require('../models/index.js');
const userRouter = require('../routers/user.js');
const dotenv = require('dotenv');

dotenv.config();
console.log('probando');

const app = express();
console.log('probando');

app.use(express.json()); // Middleware para convertir a JSON

// Ruta básica para comprobar el funcionamiento
app.use('/user', userRouter);
console.log('probando');
syncDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Aplicación funcionando en el puerto ${PORT}`));
