 const mongoose=require("mongoose")

 const userSchema=mongoose.Schema({

     email:{
         type:String,
         unique:true
     },
     name:{
         type:String
     },
     
     mobile:{
         type:String
     },
     password:{
         type:String
     },
     photo:{
         type:String
     },

 },{
     versionKey:false,timestamps:true
 })
 
 const userModel=mongoose.model("users",userSchema)
 module.exports=userModel
