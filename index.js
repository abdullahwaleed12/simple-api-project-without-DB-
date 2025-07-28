
const express = require("express");

const app = express();


app.use(express.json());

const coursesRouter = require("./routes/courses_routes")

app.use("/api/courses", coursesRouter)

app.listen(5001, () => {
  console.log("listening on port 5001");
})