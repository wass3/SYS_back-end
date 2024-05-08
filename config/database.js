const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sys_database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente con la base de datos.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}
  
module.exports = sequelize;