const router = require('express').Router();
const followersController = require('../controllers/followersController.js');

const followersRoute = router;
module.exports = followersRoute;


followersRoute.get('/', followersController.getAllFollowers);

//Obtener todos los seguidores de un usuario
followersRoute.get('/seguidores/:followed_id', followersController.getFollowersByFollowedId);

//Obtener el número de seguidores de un usuario
followersRoute.get('/seguidores/:followed_id/numero', followersController.getNumberOfFollowers);

//Obtener todos los seguidos de un usuario
followersRoute.get('/seguidos/:follower_id', followersController.getFollowersByFollowerId);

//Obtener el número de seguidos de un usuario
followersRoute.get('/seguidos/:follower_id/numero', followersController.getNumberOfFollowed);


followersRoute.post('/follow', followersController.follow);

followersRoute.delete('/unfollow/:follower_id/:followed_id', followersController.unfollow);
