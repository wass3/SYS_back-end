const router = require('express').Router();
const userController = require('../controllers/userController.js');

const userRoute = router;
module.exports = userRoute;


userRoute.get('/', userController.getAllUsers);
userRoute.get('/test', userController.test);

userRoute.post('/create', userController.createUser);

userRoute.get('/:id', userController.getUserById);

userRoute.put('/:id', userController.updateUser);

userRoute.delete('/:id', userController.deleteUser);