const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
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
    allowNull: false
  },
  user_img: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

module.exports = User;