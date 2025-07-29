
const express = require("express");

const app = express();

const mongoose = require("mongoose");
const url = "mongodb+srv://abdullahprogramming14:nodeJS12@learn-mangodb2.yazbrb7.mongodb.net/codeZone?retryWrites=true&w=majority&appName=learn-mangoDB2"
mongoose.connect(url).then(() => {
  console.log("mongoose connect")
})
app.use(express.json());

const coursesRouter = require("./routes/courses_routes")

app.use("/api/courses", coursesRouter)

app.listen(5001, () => {
  console.log("listening on port 5001");
})