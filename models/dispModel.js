const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class Disponibility extends Model {}

Disponibility.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'user_id'
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Disponibilidad',
    freezeTableName: true,
    timestamps: false
});

module.exports = Disponibility

