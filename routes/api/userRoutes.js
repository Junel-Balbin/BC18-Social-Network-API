// Importing the router and user controller functions.
const router = require('express').Router();
const mongoose = require('mongoose');

const {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// http://localhost:3001/api/user
router.route('/')
.get(getUser)
.post(createUser);

// http://localhost:3001/api/user/:userId
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// http://localhost:3001/api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

// Exporting the router.
module.exports = router;

// Class Mini Project 18 was a big help with structure and code snippets.