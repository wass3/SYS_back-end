const Preferences = require('../models/preferencesModel.js');

const preferencesController = {
    getAllPreferences: async (req, res) => {
        try {
            console.log('Obteniendo preferencias...');
            const preferences = await Preferences.findAll();
            console.log('Preferencias obtenidas:', preferences);
            res.status(200).json({
                ok: true,
                status: 200,
                preferences
            });
        } catch (error) {
            console.error('Error al obtener preferencias:', error);
            res.status(500).json({ error: 'Error al obtener preferencias' });
        }
    },

    getPreferencesByUserId: async (req, res) => {
        const userId = req.params.user_id;
        try {
            const preferences = await Preferences.findAll({
                where: {
                    user_id: userId
                }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                preferences
            });
        } catch (error) {
            console.error('Error al obtener preferencias por usuario:', error);
            res.status(500).json({ error: 'Error al obtener preferencias por usuario' });
        }
    }
};

module.exports = preferencesController;