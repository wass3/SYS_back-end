const Followers = require('../models/followersModel.js');

// Controlador para manejar las operaciones relacionadas con los planes
const followersController = {
    getAllFollowers: async (req, res) => {
        try {
            console.log('Obteniendo seguidores...');
            const followers = await Followers.findAll({
                attributes: ['follower_id', 'followed_id'],});
            console.log('Seguidores obtenidos:', followers);
            res.status(200).json({
                ok: true,
                status: 200,
                followers: followers
            });
        } catch (error) {
            console.error('Error al obtener seguidores:', error);
            res.status(500).json({ error: 'Error al obtener seguidores' });
        }
    },

    getFollowersByFollowedId: async (req, res) => {
        const followedId = req.params.followed_id;
        try {
            const followers = await Followers.findAll({
                attributes: ['follower_id', 'followed_id'],
                where: { followed_id: followedId }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                followers: followers
            });
        } catch (error) {
            console.error('Error al obtener seguidores por followedId:', error);
            res.status(500).json({ error: 'Error al obtener seguidores por followedId' });
        }
    },

    getFollowersByFollowerId: async (req, res) => {
        const followerId = req.params.follower_id;
        try {
            const followers = await Followers.findAll({
                attributes: ['follower_id', 'followed_id'],
                where: { follower_id: followerId }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                followers: followers
            });
        } catch (error) {
            console.error('Error al obtener seguidores por followerId:', error);
            res.status(500).json({ error: 'Error al obtener seguidores por followerId' });
        }
    },

    getNumberOfFollowers: async (req, res) => {
        const followedId = req.params.followed_id;
        try {
            const followers = await Followers.count({
                where: { followed_id: followedId }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                followers: followers
            });
        } catch (error) {
            console.error('Error al obtener el número de seguidores:', error);
            res.status(500).json({ error: 'Error al obtener el número de seguidores' });
        }
    },

    getNumberOfFollowed: async (req, res) => {
        const followerId = req.params.follower_id;
        try {
            const followed = await Followers.count({
                where: { follower_id: followerId }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                followed: followed
            });
        } catch (error) {
            console.error('Error al obtener el número de seguidos:', error);
            res.status(500).json({ error: 'Error al obtener el número de seguidos' });
        }
    },

    follow: async (req, res) => {
        const { follower_id, followed_id } = req.body;

        // Validar si el usuario intenta seguirse a sí mismo
        if (follower_id === followed_id) {
            return res.status(400).json({ error: 'No puedes seguirte a ti mismo' });
        }

        try {
            // Verificar si ya existe una entrada en la tabla Followers
            const existingFollower = await Followers.findOne({
                where: { follower_id, followed_id }
            });

            // Si ya existe una entrada para la combinación de follower_id y followed_id
            if (existingFollower) {
                return res.status(400).json({ error: 'Ya sigues a este usuario' });
            }

            // Crear el nuevo seguidor
            const newFollower = await Follower.create({ follower_id, followed_id });

            return res.status(201).json(newFollower);
        } catch (error) {
            console.error('Error al seguir a un usuario:', error);
            res.status(500).json({ error: 'Error al seguir a un usuario' });
        }
    },

    unfollow: async (req, res) => {
        const followerId = req.params.follower_id;
        const followedId = req.params.followed_id;
        try {
            await Followers.destroy({
                where: {
                    follower_id: followerId,
                    followed_id: followedId
                }
            });
            res.status(200).json({ message: 'Has dejado de seguir a este usuario' });
        } catch (error) {
            console.error('Error al dejar de seguir a un usuario:', error);
            res.status(500).json({ error: 'Error al dejar de seguir a un usuario' });
        }
    }
};

module.exports = followersController;

