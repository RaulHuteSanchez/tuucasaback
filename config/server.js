const express = require('express');
const syncDB = require('./synDatabase.js');
const User = require('../models/index.js');
const userRouter = require('../routers/ruser.js');
const houseRouter = require('../routers/rhouses.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para convertir a JSON

app.get('/test', (req, res) => {
  res.send('¡Endpoint de prueba funcionando!');
});

app.use('/user', userRouter);
app.use('/house', houseRouter);

syncDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Aplicación funcionando en el puerto ${PORT}`));
