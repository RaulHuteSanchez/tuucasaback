const sequelize = require('./database.js');

const syncDB = async () => {
  try {
    await sequelize.sync();
    console.log('Database & tables created!');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

module.exports = syncDB;
