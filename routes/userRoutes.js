const router = require('express').Router();
const userController = require('../controllers/userController.js');
const authMiddleware = require('../middleware/authMiddleware');

const userRoute = router;
module.exports = userRoute;


userRoute.get('/', authMiddleware, userController.getAllUsers);
userRoute.get('/test', userController.test);

userRoute.post('/register', userController.createUser);

userRoute.post('/login', userController.login);

userRoute.get('/:id', userController.getUserById);

userRoute.put('/:id', userController.updateUser);

userRoute.delete('/:id', userController.deleteUser);