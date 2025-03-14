import mongoose from 'mongoose';

// mini models
const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
   orderPrice: {
    type:Number,
    require: true 
   },
   customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },
   orderItems: {
    type: [orderItemSchema],
   },
   address: {
    type:String,
    required: true
   },
   status:{
    type:String,
    enum:["PENDING", "CANCELLED","DELIVERED"],
    default:"PENDING"
   }
},{timestamps: true})