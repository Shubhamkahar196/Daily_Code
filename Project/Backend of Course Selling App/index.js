const express = require("express");

const { createUserRoutes} = require("./routes/user");
const {createCourseRoutes} = require("./routes/course");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shubham12";
const mongoose = require("mongoose");
const course = require("./routes/course");
const app = express();

app.use(express());


app.use("/user",userRouter);
app.use("/course",courseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})