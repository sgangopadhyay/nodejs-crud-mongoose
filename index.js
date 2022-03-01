const mongoose = require("mongoose");
const express = require("express");
const app = express();
const student_data = require("./model");
const router = express.Router();
const port = 3000;

var uri = "mongodb://localhost:27017/suman";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/", router);

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
// insert data
router.route("/insert").post(function (req, res) {
  student_data.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// fetch data
router.route("/data").get(function (req, res) {
  student_data.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
