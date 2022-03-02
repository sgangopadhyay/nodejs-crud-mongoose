const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/alpha";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const alienRouter = require("./routes/routes");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
