import { Router } from "express";
import { UserModel } from "../models/user";
import { UserController } from "../controllers/user";

export const userRouter = Router();

userRouter.get("/", UserController.getAll);

userRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.getById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.sendStatus(404);
    }
})

userRouter.post("/", async (req, res) => {
    const user = await UserModel.create(req.body);
    if (user) {
        res.status(200).json(user);
    } else {
        res.sendStatus(404);
    }
})

userRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.delete(id);
    if (user) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
})

