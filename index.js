
const express = require("express");
require('dotenv').config();
const app = express();

const mongoose = require("mongoose");
const url = process.env.MONGO_URL; 
mongoose.connect(url).then(() => {
  console.log("mongoose connect")
})
app.use(express.json());

const coursesRouter = require("./routes/courses_routes")

app.use("/api/courses", coursesRouter)

app.listen(process.env.MONGO_PORT, () => {
  console.log("listening on port 5001");
})