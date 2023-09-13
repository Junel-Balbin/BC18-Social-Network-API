// Importing the Thought & User from the '../models' directory.
const { Thought, User } = require("../models");

const userController = {

    // Todos: GET all users.
    async getUser(req, res) {
        try {
            const user = await User.find();
            return res.status(200).json(user);
          } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }

    },

    // Todos: GET user by ID.
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate({ path: "thoughts", select: "-__v" })
            .populate({ path: "friends", select: "-__v" });
              
            if (!user) {
              return res.status(404).json({ message: 'No User with that ID' });
            }

            return res.status(200).json(user);
          } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }

    },

    // Todos: Create user.
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user);

          } catch (err) {
            return res.status(500).json(err);
          }

    },

    // Todos: Update user.
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }

    },

    // Todos: Delete user.
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });
      
            if (!user) {
              return res.status(404).json({ message: 'No User exists' })
            }
            return res.status(200).json ({ message: 'User successfully deleted.' });

          } catch (err) {
            console.log(err);
            return res.status(500).json(err);
          }

    },

    // Todos: Add friend.
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
              { _id: req.params.friendId },
              { $addToSet: { friends: req.params.friendId } },
              { runValidators: true, new: true }
            );
      
            if (!user) {
              return res.status(404).json({ message: 'No User found with that ID' })
            }
            res.json(user);
          } catch (err) {
            return res.status(500).json(err);
          }

    },

    // Todos: Delete friend.
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
              { _id: req.params.userId },
              { $pull: { friends: { friends: req.params.friendId } } },
              { runValidators: true, new: true }
            );
      
            if (!user) {
              return res
                .status(404)
                .json({ message: 'No student found with that ID' });
            }
      
            res.json({message: 'Friend removed!'});
          } catch (err) {
            return res.status(500).json(err);
          }
    },
        
};

// Exporting the userController.
module.exports = userController;

// Class Mini Project 18 was a big help with structure and code snippets.