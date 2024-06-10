const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const User = require('./userModel');

const Preferencia = sequelize.define('Preferencias', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'user_id'
    },
  },
  amigo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'user_id'
    },
  },
}, {
  tableName: 'Preferencias',
  timestamps: false,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
});

module.exports = Preferencia;
