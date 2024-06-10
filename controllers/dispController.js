const Disponibility = require('../models/dispModel.js');

const disponibilityController = {
    getAllDisponibilities: async (req, res) => {
        try {
            console.log('Obteniendo disponibilidades...');
            const disponibilities = await Disponibility.findAll();
            console.log('Disponibilidades obtenidas:', disponibilities);
            res.status(200).json({
                ok: true,
                status: 200,
                disponibilities
            });
        } catch (error) {
            console.error('Error al obtener disponibilidades:', error);
            res.status(500).json({ error: 'Error al obtener disponibilidades' });
        }
    },

    getDisponibilityByUserId: async (req, res) => {
        const userId = req.params.user_id;
        console.log('user_id: ', userId);
        try {
            const disponibilities = await Disponibility.findAll({
                where: {
                    user_id: userId
                }
            });
            res.status(200).json({
                ok: true,
                status: 200,    
                disponibilities
            });
        } catch (error) {
            console.error('Error al obtener disponibilidades por usuario:', error);
            res.status(500).json({ error: 'Error al obtener disponibilidades por usuario' });
        }
    },

    createDisponibility: async (req, res) => {
        const { user_id, fecha, hora_inicio, hora_fin } = req.body;
        try {
            const disponibility = await Disponibility.create({
                user_id,
                fecha,
                hora_inicio,
                hora_fin
            });
            res.status(201).json({
                ok: true,
                status: 201,
                disponibility
            });
        } catch (error) {
            console.error('Error al crear disponibilidad:', error);
            res.status(500).json({ error: 'Error al crear disponibilidad' });
        }
    },

    updateDisponibility: async (req, res) => {
        const disponibilityId = req.params.id;
        const { fecha, hora_inicio, hora_fin } = req.body;
        try {
            const disponibility = await Disponibility.findByPk(disponibilityId);
            if (disponibility) {
                await disponibility.update({ fecha, hora_inicio, hora_fin });
                res.status(200).json({
                    ok: true,
                    status: 200,
                    disponibility
                });
            } else {
                res.status(404).json({ error: 'Disponibilidad no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar disponibilidad:', error);
            res.status(500).json({ error: 'Error al actualizar disponibilidad' });
        }
    },

    deleteDisponibility: async (req, res) => {
        const disponibilityId = req.params.id;
        try {
            const disponibility = await Disponibility.findByPk(disponibilityId);
            if (disponibility) {
                await disponibility.destroy();
                res.status(200).json({ message: 'Disponibilidad eliminada exitosamente' });
            } else {
                res.status(404).json({ error: 'Disponibilidad no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar disponibilidad:', error);
            res.status(500).json({ error: 'Error al eliminar disponibilidad' });
        }
    }
};

module.exports = disponibilityController;

