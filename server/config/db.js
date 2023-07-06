import mongoose from "mongoose";

const connectDB =async()=>{
     const res= await mongoose.connect(
           "mongodb://0.0.0.0:27017/mern-auth-project")
     if(res){
          console.log("connected successfully")
     }
}

export default connectDB;