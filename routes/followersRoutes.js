const router = require('express').Router();
const followersController = require('../controllers/followersController.js');

const followersRoute = router;
module.exports = followersRoute;


followersRoute.get('/', followersController.getAllFollowers);

followersRoute.get('/:followed_id', followersController.getFollowersByFollowedId);
followersRoute.get('/:follower_id', followersController.getFollowersByFollowerId);


followersRoute.post('/follow', followersController.follow);

followersRoute.delete('/unfollow/:follower_id/:followed_id', followersController.unfollow);
