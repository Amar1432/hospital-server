const mongoose = require("mongoose");

const opdSchema = new mongoose.Schema({
  opdNumber: {
    type:String,
    required:true,
    unique: [true, "OPD number already used"],
  },
  name: {
    type:String,
    required:true
  },
  fatherName: {
    type:String,
    required:true
  },
  mobileNumber: {
    type:Number,
    required:true
  },
  age: {
    type:Number,
    required:true
  },
  gender: {
    type:String,
    required:true
  },
  address: {
    type:String,
    required:true
  },
  consultantDoctor: {
    type:String,
    required:true
  },
  specialistIn: {
    type:String,
    required:true
  },
  qualification: {
    type:String,
    required:true
  },
  fee: {
    type:Number,
    required:true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

const Opd = new mongoose.model("opdRecord", opdSchema);

module.exports = Opd;
