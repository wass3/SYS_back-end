const User_Plan = require('../models/user_planModel.js');

const user_planController = {

    // Obtener todas las relaciones
    getAllUser_plans: async (req, res) => {
        try {
            const user_plans = await User_Plan.findAll();
            res.status(200).json({
                ok: true,
                status: 200,
                user_plans: user_plans
            });
        } catch (error) {
            console.error('Error al obtener user_plans:', error);
            res.status(500).json({ error: 'Error al obtener user_plans' });
        }
    },
    // Obtener todos los planes de un usuario
    getUser_plansByUserId: async (req, res) => {
        const user_id = req.params.user_id;
        try {
            const user_plans = await User_Plan.findAll({
                where: { user_id: user_id }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                user_plans: user_plans
            });
        } catch (error) {
            console.error('Error al obtener user_plans por user_id:', error);
            res.status(500).json({ error: 'Error al obtener user_plans por user_id' });
        }
    },

    // Obtener todos los usuarios de un plan
    getUser_plansByPlanId: async (req, res) => {
        const plan_id = req.params.plan_id;
        try {
            const user_plans = await User_Plan.findAll({
                where: { plan_id: plan_id }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                user_plans: user_plans
            });
        } catch (error) {
            console.error('Error al obtener user_plans por plan_id:', error);
            res.status(500).json({ error: 'Error al obtener user_plans por plan_id' });
        }
    },

    // Añadir un usuario a un plan
    addUser_plan: async (req, res) => {
        const { user_id, plan_id } = req.params;
        try {
            await User_Plan.create({
                user_id: user_id,
                plan_id: plan_id
            });
            res.status(201).end();
        } catch (error) {
            console.error('Error al añadir user_plan:', error);
            res.status(500).json({ error: 'Error al añadir user_plan' });
        }
    },

    // Borrar un usuario de un plan
    deleteUser_plan: async (req, res) => {
        const { user_id, plan_id } = req.params;
        try {
            const user_plan = await User_Plan.findOne({
                where: { user_id: user_id, plan_id: plan_id }
            });
            if (user_plan) {
                await user_plan.destroy();
                res.status(204).end();
            } else {
                res.status(404).json({ error: 'user_plan no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar user_plan:', error);
            res.status(500).json({ error: 'Error al eliminar user_plan' });
        }
    },

}

module.exports = user_planController;