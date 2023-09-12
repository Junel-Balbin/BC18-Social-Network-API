// Imports modules from the Mongoose library.
const { Schema, model } = require('mongoose');

// Defines a new schema for user.
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Required to match email address."],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Defines a virtual property.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Middleware function.
userSchema.pre("findOneAndDelete", { document: false, query: true }, async function() {
  console.log("User pre-delete");
  const doc = await this.model.findOne(this.getFilter());
  console.log(doc.username);
  await Thought.deleteMany({ username: doc.username });
});

// Creates User model with userSchema.
const User = model('User', userSchema);

// Exports User.
module.exports = User;