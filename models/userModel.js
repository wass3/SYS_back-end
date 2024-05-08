import { randomUUID } from 'node:crypto';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_handler: {
    type: DataTypes.STRING,
    unique: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  name: DataTypes.STRING,
  surname: DataTypes.STRING,
  biography: DataTypes.TEXT,
  email_address: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
  user_img: DataTypes.STRING,
});

module.exports = User;
