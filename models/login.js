const mongoose=require("mongoose");
const employeeSchema2=new mongoose.Schema({

email:{
type:String,
unique:true,
required:true
},
pass:{
type:String,
required:true
}

})

const Login=new mongoose.model("Login",employeeSchema2);
module.exports=Login;
