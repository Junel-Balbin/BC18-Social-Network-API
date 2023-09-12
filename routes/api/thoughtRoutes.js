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

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Exporting the router.
module.exports = router;