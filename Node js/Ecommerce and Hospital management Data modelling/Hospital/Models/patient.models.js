import mongoose, { Schema } from "mongoose";

const patientlSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    diangosedwith: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum:['M','F','O'],
        required: true
    },

   admittedIn : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hospital"  
    },




}, { timestamps: true })

export const patientl = mongoose.model("patientl", patientlSchema)