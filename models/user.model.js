const mongoose = require("mongoose");
const validator = require("validator");
const userRoles = require("../utils/user-role")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validator: [validator.isEmail, "Filed must be a valid email"]
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  role: {
    type: String,
    enum : [userRoles.USER, userRoles.ADMIN, userRoles.MANGER],
    default: userRoles.USER
  },
  avatar: {
    type: String,
    default: "uploads/boy.png"
  }
})

module.exports = mongoose.model("User", userSchema);