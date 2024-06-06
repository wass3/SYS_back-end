const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const User = require('./userModel');

class Follower extends Model {}

Follower.init({
  follower_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    },
    allowNull: false,
    primaryKey: true
  },
  followed_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    },
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'Followers',
  freezeTableName: true,
  timestamps: true,
  createdAt: false,
  updatedAt: false

});

module.exports = Follower;
