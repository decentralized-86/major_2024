const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const coordinatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

coordinatorSchema.methods.generateAuthTokenCoordinator = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Coordinator = mongoose.model("Coordinator", coordinatorSchema);
module.exports = Coordinator;
