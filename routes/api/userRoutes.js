// Importing the router and user controller functions.
const router = require('express').Router();

const {
    getUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(addUser);

// /api/user/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

// Exporting the router.
module.exports = router;