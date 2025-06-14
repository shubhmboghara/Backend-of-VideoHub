import mongoose, { Types } from "mongoose";
const orderItems  = new mongoose.Schema({

    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    },
    
    quantity:{
        type:Number,
        required:true
    }
})


const productschema  = new mongoose.Schema({
       
    description:{
        required:true,
        type:String
    },

    name:{
        required:true,
        type:String
    },
    
    productImage:{
       type:String
    },

    price:{
         type:Number,
         default:0
    },
    
    stock:{
         type:Number,
         default:0
    },

    category:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Category",
         required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

export const  Product= mongoose.model("Product",productschema)