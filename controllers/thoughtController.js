// Importing the Thought & User from the '../models' directory.
const { Thought, User } = require("../models");

const thoughtController = {

    // GET all thoughts.
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }
        },

    // GET thought by ID.
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
              .select('-__v');
      
            if (!thought) {
              return res.status(404).json({ message: 'No Thought with that ID' });
            }
      
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }

    },

    // Add thought.
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
          } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }

    },

    // Update thought.
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
              { _id: req.params.thoughtId },
              { $set: req.body },
              { runValidators: true, new: true }
            );
      
            if (!thought) {
              return res.status(404).json({ message: 'No Thought with this id!' });
            }
      
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }

    },

    // Delete thought.
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
      
            if (!thought) {
              return res.status(404).json({ message: 'No Thought exists' });
            }
            res.json({ message: 'Thought successfully deleted.' });

          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        
    },
    // Add reaction.
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.reactionId },
                { $push: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No Thought found with this ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
        
    },
    // Delete reaction.
    async deleteReaction(req, res) {
        try{
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                res.status(404).json();
            }
            res.json({message: 'Reaction deleted.'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
      
};

// Exporting the thoughtController.
module.exports = thoughtController;

// Class Mini Project 18 was a big help with structure and code snippets.