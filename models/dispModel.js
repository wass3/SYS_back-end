const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

const User = require('./userModel');

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

Disponibility.associate = (models) => {
    Disponibility.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
    });
};

module.exports = Disponibility

