const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class Followers extends Model {}

Followers.init({
    followe_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followed_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'followers',
    freezeTableName: true,
    timestamps: true,
    createdAt: false,
    updatedAt: false
});


module.exports = Followers

