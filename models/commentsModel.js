const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class Comments extends Model {}

Comments.init({
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
        allowNull: false,
        references: {
            model: 'Plan',
            key: 'plan_id'
        }
    }
}, {
    sequelize,
    modelName: 'comments',
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false
});


module.exports = Comments