const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class User extends Model {}

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
    allowNull: false
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

User.hasMany(Plan);

console.log(User === sequelize.models.user);

module.exports = User;