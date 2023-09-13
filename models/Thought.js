// Imports modules from the Mongoose library.
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

// Defines a new schema for thought.
const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      minlength: 1,
      max_length: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }

);

// Defines a virtual property.
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Creates Thought model with userSchema.
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

// Class Mini Project 18 was a big help with structure and code snippets.