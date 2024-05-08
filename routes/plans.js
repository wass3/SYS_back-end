import { Router } from "express";

export const planRouter = Router();

planRouter.get("/", (req, res) => {
    const { id } = req.params;
    const plan = plan.find(p => p.id === id);

    if (!plan) {
        res.status(404).send('Plan no encontrado');
    }
    res.status(201).json(req.body);
})

planRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const plan = plan.find(p => p.id === id);
})
