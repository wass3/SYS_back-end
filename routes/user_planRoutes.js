const Router = require('express').Router;
const user_planController = require('../controllers/user_planController.js');

const user_planRoute = Router();
module.exports = user_planRoute;

// obtener todas las relaciones
user_planRoute.get('/', user_planController.getAllUser_plans);

// obtener todos los planes de un usuario
user_planRoute.get('/user/:user_id/plans', user_planController.getUser_plansByUserId);
// obtener todos los usuarios de un plan
user_planRoute.get('/plan/:plan_id/users', user_planController.getUser_plansByPlanId);


// añadir un usuario a un plan
user_planRoute.post('/:plan_id/:user_id', user_planController.addUser_plan);


// Borrar un usuario de un plan
user_planRoute.delete('/:plan_id/:user_id', user_planController.deleteUser_plan);

