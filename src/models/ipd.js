const mongoose = require("mongoose");
const validator = require("validator");

const ipdSchema = new mongoose.Schema({
  regNumber: {
    type: String,
    required: true,
    unique: [true, "Registration number already used"],
  },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    maxlength: 3,
  },
  admittedIn: {
    type: String,
    required: true,
  },
  referBy: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  address: {
    type: String,
    required: true,
  },
  isAdmitted: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Ipd = new mongoose.model("IpdRecord", ipdSchema);

module.exports = Ipd;
