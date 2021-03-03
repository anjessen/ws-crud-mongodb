const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Todo", TodoSchema);

const userSchema = mongoose.Schema({
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String }
  },
  username: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
