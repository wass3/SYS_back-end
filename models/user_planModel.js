const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class User_plan extends Model {}

User_plan.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    plan_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user_plan',
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false
});

User_plan.hasMany(Plan);
User_plan.hasMany(User);

console.log(User_plan === sequelize.models.user_plan);

module.exports = User_plan