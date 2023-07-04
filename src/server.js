const express = require('express');
const syncDB = require('./config/synDatabase.js');
const User = require('./models/index.js');
const userRouter = require('./routers/ruser.js');
const houseRouter = require('./routers/rhouses.js');
const dotenv = require('dotenv');
const  config  = require('./config/config.js');

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para convertir a JSON

app.get('/test', (req, res) => {
  res.send('¡Endpoint de prueba funcionando!');
});

app.use('/user', userRouter);
app.use('/house', houseRouter);

syncDB();

const PORT = config.port || 4000;
app.listen(PORT, () => console.log(`Aplicación funcionando en el puerto ${PORT}`));
