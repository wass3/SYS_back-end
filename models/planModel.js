const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class Plan extends Model {}

Plan.init({
    plan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dayhour: {
        type: DataTypes.DATE
    },
    place: {
        type: DataTypes.STRING
    },
    plan_img: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'plan',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

console.log(Plan === sequelize.models.plan);

module.exports = Plan;