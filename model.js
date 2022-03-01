// 3.) create schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let student_data = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  { collection: "student_data" }
);

module.exports = mongoose.model("student_data", student_data);