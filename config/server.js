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

app.get('/test', (req, res) => {
  res.send('¡Endpoint de prueba funcionando!');
});
app.use('/user', userRouter);
syncDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Aplicación funcionando en el puerto ${PORT}`));
