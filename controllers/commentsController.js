const Comments = require('../models/commentsModel.js');

const commentsController = {
    getAllComments: async (req, res) => {
        try {
            console.log('Obteniendo comentarios...');
            const comments = await Comments.findAll();
            console.log('Comentarios obtenidos:', comments);
            res.status(200).json({
                ok: true,
                status: 200,
                comments: comments
            });
        } catch (error) {
            console.error('Error al obtener comentarios:', error);
            res.status(500).json({ error: 'Error al obtener comentarios' });
        }
    },

    getCommentsByPlanId: async (req, res) => {
        const planId = req.params.plan_id;
        try {
            const comments = await Comments.findAll({
                where: {
                    plan_id: planId
                }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                comments: comments
            });
        } catch (error) {
            console.error('Error al obtener comentarios por plan:', error);
            res.status(500).json({ error: 'Error al obtener comentarios' });
        }
    },

    getCommentById: async (req, res) => {
        const commentId = req.params.id;
        try {
            const comment = await Comments.findByPk(commentId);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ error: 'Comentario no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener comentario por ID:', error);
            res.status(500).json({ error: 'Error al obtener comentario por ID' });
        }
    },

    addComment: async (req, res) => {
        const planId = req.params.plan_id;
        const comment = req.body;
        try {
            const commentCreated = await Comments.create({
                plan_id: planId,
                content: comment.content,
                user_id: comment.user_id
            });
            res.status(201).json(commentCreated);
        } catch (error) {
            console.error('Error al crear comment:', error);
            res.status(500).json({ error: 'Error al crear comment' });
        }
    },

    updateComment: async (req, res) => {
        const commentId = req.params.id;
        const comment = req.body;
        try {
            const commentUpdated = await Comments.update({
                content: comment.content
            }, {
                where: {
                    id: commentId
                }
            });
            if (commentUpdated[0] === 1) {
                res.status(200).json({
                    ok: true,
                    status: 200,
                    message: 'Comentario actualizado'
                });
            } else {
                res.status(404).json({
                    error: 'Comentario no encontrado'
                });
            }
        } catch (error) {
            console.error('Error al actualizar comentario:', error);
            res.status(500).json({ error: 'Error al actualizar comentario' });
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.id;
        try {
            const commentDeleted = await Comments.destroy({
                where: {
                    id: commentId
                }
            });
            if (commentDeleted === 1) {
                res.status(200).json({
                    ok: true,
                    status: 200,
                    message: 'Comentario eliminado'
                });
            } else {
                res.status(404).json({
                    error: 'Comentario no encontrado'
                });
            }
        } catch (error) {
            console.error('Error al eliminar comentario:', error);
            res.status(500).json({ error: 'Error al eliminar comentario' });
        }
    },

};

module.exports = commentsController;
