import mongoose, { Schema } from "mongoose";

const  docterSchema= new mongoose.Schema({

     name: {
        type: String,
        required: true
    },

    salaray: {
        type: String,
        required: true
    },

    qualification: {
        type: String,
        required: true
    },

    experienceInYears: {
        type: Number,
        default:0,
        required: true
    },

    workeInHospitals :[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hospital",
        required: true,
        default:"None"
    }]


},{timestamps:true})

export const Hospital = mongoose.model("Hospital",docterSchema)