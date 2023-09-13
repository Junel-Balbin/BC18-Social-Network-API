// Importing the router and thought controller functions.
const router = require('express').Router();

const {
    getThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// http://localhost:3001/api/thought
router.route('/').get(getThought).post(createThought);

// http://localhost:3001/api/thought/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// http://localhost:3001/api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// http://localhost:3001/api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting the router.
module.exports = router;

// Class Mini Project 18 was a big help with structure and code snippets.