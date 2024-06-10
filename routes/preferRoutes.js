const Router = require('express').Router;
const preferencesController = require('../controllers/preferencesController.js');
const preferencesRoute = Router();
module.exports = preferencesRoute;


preferencesRoute.get('/', preferencesController.getAllPreferences);

//obtener preferencias por id de usuario
preferencesRoute.get('/:user_id', preferencesController.getPreferencesByUserId);