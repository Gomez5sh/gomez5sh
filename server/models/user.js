const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nickname: {
    type: String,
    unique: true,
  },
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  active: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
