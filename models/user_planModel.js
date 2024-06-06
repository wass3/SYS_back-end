const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const User = require('./userModel');
const Plan = require('./planModel');

class UserPlan extends Model {}

UserPlan.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    },
    allowNull: false,
    primaryKey: true
  },
  plan_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plan,
      key: 'plan_id'
    },
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'User_Plan',
  freezeTableName: true,
  timestamps: true,
  createdAt: false,
  updatedAt: false
});

module.exports = UserPlan;
