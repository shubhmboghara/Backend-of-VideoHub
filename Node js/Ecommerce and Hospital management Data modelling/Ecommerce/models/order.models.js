import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({

    orderprice: {
        type: Number,
        required: true
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    orderItems: {
        type: [orderSchema]
    },
    address: {
        type: String,
        required: true
    },

    status:{
             type:String,
             enum:["pendind","cancelled","deliverd"],
             default:"pendind"
    }

}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)