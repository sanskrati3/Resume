const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
  name:{
  type:String,
  //required:true
},
email:{
type:String,
unique:true,
//required:true
},
pass:{
type:String,
//required:true
},
cpass:{
type:String,
//required:true
},

})

const Register=new mongoose.model("Register",employeeSchema);
module.exports=Register;
