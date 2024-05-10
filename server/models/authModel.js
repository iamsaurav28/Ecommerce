import mongoose from "mongoose";

const authscheme = new mongoose.Schema({
     name:{
          type:String,
     },
     email:{
          type:String,
     },
     password:{
          type:String,
     },
     isVerified:{
          type:String,
     }
})


const authModel = mongoose.model("user", authscheme)

export default authModel;