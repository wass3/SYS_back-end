const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET; // Debes almacenar esto en una variable de entorno en producción

class User extends Model {
  // Método para comparar la contraseña
  async comparePassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  // Método para generar token
  generateToken() {
    return jwt.sign({ id: this.user_id, email: this.email_address }, JWT_SECRET, { expiresIn: '1h' });
  }
}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_handler: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biography: {
    type: DataTypes.STRING
  },
  email_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      // Guarda la contraseña hasheada
      const salt = bcrypt.genSaltSync(10);
      this.setDataValue('password', bcrypt.hashSync(value, salt));
    }
  },
  user_img: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user',
  freezeTableName: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

console.log(User === sequelize.models.user);

module.exports = User;
