const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  roll: String,
  address: String,
});

const User = new mongoose.model("users", UserSchema);
module.exports = User;
