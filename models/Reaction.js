// Imports modules from the Mongoose library.
const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Defines a new schema for reactions.
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
    );

// Exports the reactionSchema.
module.exports = reactionSchema;

// Class Mini Project 18 was a big help with structure and code snippets.