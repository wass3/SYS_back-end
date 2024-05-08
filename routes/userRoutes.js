import { Router } from "express";
import { UserModel } from "../models/userModel";
import { UserController } from "../controllers/userController";

export const userRouter = Router();


router.get('/', userController.getAllUsers);

router.post('/create', userController.createUser);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);