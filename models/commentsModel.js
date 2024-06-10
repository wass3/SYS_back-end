const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const Plan = require('./planModel');
const User = require('./userModel');

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
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comments',
  freezeTableName: true,
  timestamps: true,
  createdAt: false,
  updatedAt: false
});

Comment.associate = (models) => {
  Comment.belongsTo(models.Plan, {
    foreignKey: 'plan_id',
    onDelete: 'CASCADE'
  });
  Comment.belongsTo(models.User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
};

module.exports = Comment;

