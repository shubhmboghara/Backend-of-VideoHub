import mongoose, { Schema } from "mongoose";

const hospitalSchema= new mongoose.Schema({

   name  :{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    speciallzedIn:{
        type: String,
        required: true
    },

},{timestamps:true})

export const Hospital = mongoose.model("Hospital",hospitalSchema)