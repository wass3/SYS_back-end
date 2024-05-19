const Router = require('express').Router;
const commentsController = require('../controllers/commentsController.js');
const commentsRoute = Router();
module.exports = commentsRoute;

commentsRoute.get('/', commentsController.getAllComments);

// obtener todos los comentarios de un plan
commentsRoute.get('/plan/:plan_id', commentsController.getCommentsByPlanId);

// obtener un comentario específico por su ID
commentsRoute.get('/:id', commentsController.getCommentById);

// añadir un comentario a un plan
commentsRoute.post('/plan/:plan_id', commentsController.addComment);

// actualizar un comentario existente
commentsRoute.put('/:id', commentsController.updateComment);

// borrar un comentario
commentsRoute.delete('/:id', commentsController.deleteComment);