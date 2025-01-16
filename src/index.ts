import express from "express";
import mongoose from "mongoose";
import { Jwt } from "jsonwebtoken";
import { UserModel } from "./db";


const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

app.post("/signup",async (req,res) => {
  console.log("body",req.body)
  const {username, password} = req.body;
  
  //const password = req.body.password;
  console.log(req.body)
  await UserModel.create({
    username,password
  })
  res.json({
    message: "User singed UP"
  })

})

app.post("/api/v1/signin",(req,res) => {

})
app.post("/api/v1/content",(req,res) => {

})
app.get("/api/v1/content",(req,res) => {

})
app.get("/api/v1/signup",(req,res) => {

})
app.delete("/api/v1/content",(req,res) => {

})
app .listen(4100);

