import { UserModel } from "../models/user.js";
export class UserController {
    static async getAll(req, res) {
        const users = await UserModel.getAll();
        //qué es lo que reneriza
        res.json(users);
    }   

    static async getById(req, res) {
        const { id } = req.params;
        const user = await UserModel.getById(id);
        res.json(user);
    }

    static async create(req, res) {
        const user = await UserModel.create(req.body);
        res.json(user);
    }

    static async delete(req, res) {
        const { id } = req.params;
        const user = await UserModel.delete(id);
        res.json(user);
    }
}