const Router = require('express').Router;
const disponibilityController = require('../controllers/dispController.js');

const disponibilityRoute = Router();
module.exports = disponibilityRoute;

disponibilityRoute.get('/', disponibilityController.getAllDisponibilities);

//obtener disponibilidad por id de usuario
disponibilityRoute.get('/:user_id', disponibilityController.getDisponibilityByUserId);


disponibilityRoute.post('/', disponibilityController.createDisponibility);
disponibilityRoute.put('/:id', disponibilityController.updateDisponibility);
disponibilityRoute.delete('/:id', disponibilityController.deleteDisponibility);