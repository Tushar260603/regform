import mongoose from "mongoose"



const RegSchema=new mongoose.Schema({
username:{
    type:String,
  
    },
email:{
    type:String,
  

},
password:{
    type:String,

},
country:{
    type:String,

},
contact:{
    type:String,
  
},
},{timestamps:true})


export default mongoose.model("register",RegSchema)
















