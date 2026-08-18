const mongoose = require("mongoose")

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trime:true,

    },
     email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
       password:{
        type:String,
        require:true,
    }, 
     address:{
        type:String,
        require:true,
        trim:true,
     }
}  ,  
     {timestamps:true})


const User= mongoose.model('User',UserSchema)
  
 module.exports= User

//  190411010046708