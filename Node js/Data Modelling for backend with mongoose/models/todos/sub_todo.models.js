import mongoose, { Schema } from "mongoose";

const subtodoscahma  = new mongoose.Schema ({

   content:{
       types:String,
       required:true
   },
   
   complete:{
     types:Boolean,
     default:false
   },
   
   createdBy:{
     types:mongoose.Schema.Types.ObjectId,
     ref:"User"
   } 

},{timestamps:true})


export const SubTodo=mongoose.model("SubTodo",subtodoscahma)