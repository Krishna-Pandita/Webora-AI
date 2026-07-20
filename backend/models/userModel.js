import mongoose, { Types } from "mongoose"; 

const userSchema = new mongoose.Schema({

  name:{ type:String, required:true },

  email:{ type:String, required:true, unique:true },
 
  avatar:String,

  credits: { type: Number, default:100, min:0},

  plan:{type:String, enum:["free","pro","enterprise"], default:"free"}
  

},{timestamps:true})

export const User = mongoose.model("User", userSchema);