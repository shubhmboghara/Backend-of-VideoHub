import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    complete :{
        type:Boolean,
        default:false
    },
    createdBy :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    subTodo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]

},{timestamps:true})
//timestamps give me when data is created and upadted

export const Todo =mongoose.model("Todo" ,todoSchema)