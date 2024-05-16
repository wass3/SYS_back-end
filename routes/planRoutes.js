const router = require('express').Router();
const planController = require('../controllers/planController.js');

const planRoute = router;
module.exports = planRoute;


planRoute.get('/', planController.getAllPlans);
planRoute.get('/test', planController.test);

planRoute.get('/:id/users', planController.getUsersByPlanId);

planRoute.post('/create', planController.createPlan);

planRoute.get('/:id', planController.getPlanById);

planRoute.put('/:id', planController.updatePlan);

planRoute.delete('/:id', planController.deletePlan);
