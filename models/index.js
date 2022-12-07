const mongoose=require("mongoose");
const employeeSchema3=new mongoose.Schema({
  name:{
  type:String,
},
contact:{
type:Number,
},
address:{
type:String,
},
fblink:{
type:String,
},
instalink:{
type:String,
},
ldlink:{
type:String,
},
obj:{
type:String,
},
ex:{
type:String,
},
ad:{
type:String,
},
})

const Generate=new mongoose.model("Generate",employeeSchema3);
module.exports=Generate;
