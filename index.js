
const express = require("express");
require('dotenv').config();
const app = express();
const path = require("node:path");

const httpStatusText = require("./utils/httpStatusText");
// var cors = require('cors');

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const mongoose = require("mongoose");
const url = process.env.MONGO_URL; 
mongoose.connect(url).then(() => {
  console.log("mongoose connect")
})
const { message } = require("./utils/appError");

app.use(express.json());
// app.use(cors())
const coursesRouter = require("./routes/courses_routes");
const usersRouter = require("./routes/users_routes");

app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);

// global for errors
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({status: error.statusText || httpStatusText.ERROR, message: error.message, code: error.statusCode || 500, data: null})
});
// Global for not found routes
app.use((req, res, next) => {
  return res.status(404).json({
    status: httpStatusText.ERROR,
    message: "This resource is not available"
  });
});



app.listen(process.env.MONGO_PORT, () => {
  console.log("listening on port 5001");
})