const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const Plan = require('./planModel');

class Comment extends Model {}

Comment.init({
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  comment_img: {
    type: DataTypes.STRING
  },
  plan_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plan,
      key: 'plan_id'
    },
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comment',
  freezeTableName: true,
  timestamps: true,
  createdAt: false,
  updatedAt: false
});

module.exports = Comment;
