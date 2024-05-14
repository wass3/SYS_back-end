const Plan = require('../models/planModel.js');

// Controlador para manejar las operaciones relacionadas con los planes
const planController = {
    // Obtener todos los planes
    getAllPlans: async (req, res) => {
        try {
        console.log('Obteniendo planes...');
        const plan = await Plan.findAll();
        console.log('Planes obtenidos:', plan);
        res.status(200).json({
            ok: true,
            status: 200,
            plan: plan
        });
        } catch (error) {
        console.error('Error al obtener planes:', error);
        res.status(500).json({ error: 'Error al obtener planes' });
        }
    },

    test: async (req, res) => {
        res.send('funciona perfe');
    },

    // Crear un nuevo plan
    createPlan: async (req, res) => {
        const { name, description, duration, difficulty, url_img, steps } = req.body;
        try {
        const newPlan = await Plan.create({
            name,
            description,
            duration,
            difficulty,
            url_img,
            steps,
        });
        res.status(201).json(newPlan);
        } catch (error) {
        console.error('Error al crear plan:', error);
        res.status(500).json({ error: 'Error al crear plan' });
        }
    },



    // Obtener un plan por su ID
    getPlanById: async (req, res) => {
        const planId = req.params.id;
        try {
        const plan = await Plan.findByPk(planId);
        if (plan) {
            res.status(200).json(plan);
        } else {
            res.status(404).json({ error: 'Plan no encontrado' });
        }
        } catch (error) {
        console.error('Error al obtener plan por ID:', error);
        res.status(500).json({ error: 'Error al obtener plan por ID' });
        }
    },

    // Actualizar un plan existente
    updatePlan: async (req, res) => {
        const planId = req.params.id;
        const { name, description, duration, difficulty, url_img, steps } = req.body;
        try {
        const plan = await Plan.findByPk(planId);
        if (plan) {
            await plan.update({ name, description, duration, difficulty, url_img, steps });
            res.status(200).json(plan);
        } else {
            res.status(404).json({ error: 'Plan no encontrado' });
        }
        } catch (error) {
        console.error('Error al actualizar plan:', error);
        res.status(500).json({ error: 'Error al actualizar plan' });
        }
    },

    // Eliminar un plan
    deletePlan: async (req, res) => {
        const planId = req.params.id;
        try {
        const plan = await Plan.findByPk(planId);
        if (plan) {
            await plan.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Plan no encontrado' });
        }
        } catch (error) {
        console.error('Error al eliminar plan:', error);
        res.status(500).json({ error: 'Error al eliminar plan' });
        }
    }
};

    module.exports = planController;

