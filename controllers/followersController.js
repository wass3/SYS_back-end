const Followers = require('../models/followersModel.js');

// Controlador para manejar las operaciones relacionadas con los planes
const followersController = {
    getAllFollowers: async (req, res) => {
        try {
            console.log('Obteniendo seguidores...');
            const followers = await Followers.findAll();
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

    follow: async (req, res) => {
        const { follower_id, followed_id } = req.body;
        try {
            const newFollower = await Followers.create({
                follower_id,
                followed_id
            });
            res.status(201).json(newFollower);
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
            res.status(204).end();
        } catch (error) {
            console.error('Error al dejar de seguir a un usuario:', error);
            res.status(500).json({ error: 'Error al dejar de seguir a un usuario' });
        }
    }
};

module.exports = followersController;

