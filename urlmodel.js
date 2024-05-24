const mongoose = require("mongoose")
const URLschema = new mongoose.Schema({
    fullurl:{type:String,required:true,unique:true},
    shortID:{type:String,required:true,unique:true},
    clicks:{type:Number,default:0,required:true,unique:true}
},{ timestamps:true}
)
module.exports={connectDB}