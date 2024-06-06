const sequelize = require('./config/database');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

syncDatabase();
