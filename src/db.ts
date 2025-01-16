//In this file we will create all DB logic
//Create modules and schemas here



import {model, Schema} from "mongoose";

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

export const UserModel = model("User",UserSchema);

