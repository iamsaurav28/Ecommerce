import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";
import  jwt  from "jsonwebtoken";


class authController
{
     static userRegistration = async (req,res)=>{
          // res.send("welcome to register")

          const  {name, email, password} = req.body;
          try{
               if(name && email && password){
                const isUser = await authModel.findOne({email:email})
                if (isUser){
               return res.status(400).json({message: "user already exists"})
                }else{
                  
                const genSalt = await bcryptjs.genSalt(10);
                const hashedPassword = await bcryptjs.hash(password, genSalt); 

                const newUser = authModel({
                    name,
                    email,
                    password:hashedPassword,
                   
                })

                const resUser = await newUser.save();
                if(resUser){
               return res.status(201).json({message:"Registered successfully ", user : resUser})
                }

                }
               }else{
               return res.status(400).json({message: "all fields are required"})

               }
          
          }catch(error){
               return res.status(400).json({message: error.message})
          }
     }



     static userLogin = async(req,res)=>{
               const {email,password} =req.body;


               try{

               if(email && password){
                    const isUser=await authModel.findOne({email:email})
                    if(isUser){
                         if(email=== isUser.email && (await bcryptjs.compare(password,isUser.password))){
                          
                              const token = jwt.sign({userID: isUser._id}, "please calm down",{
                                   expiresIn: "2d",
                              })
                              return res.status(200).json({message: "Login successful", token, name: isUser.name})
                         }else{
                   return res.status(400).json({message: "invalid credentials"})
                         }
                    }else{
                   return res.status(400).json({message: "user not registered"})
                    }
               }else{
                   return res.status(400).json({message:"all fields are required"})
               }
               
                   
               }catch(error){
               return res.status(400).json({message: error.message})
               }
     }

        static changePassword = async(req,res)=>{
                
          const {newpassword, confirmpassword} = req.body;

          try{
               if(newpassword === confirmpassword){
                         const genSalt = await bcryptjs.genSalt(10);
                         const hashedPassword = await bcryptjs.hash(newpassword, genSalt);
                         await authModel.findByIdAndUpdate(req.user._id, {
                              password: hashedPassword,
                         });
               return res.status(200).json({message: "password changed successfully"})           
                      }else{
               return res.status(400).json({message: "password and confirm password does not match"})
                      }
          }catch(error){
               return res.status(400).json({message: error.message})

          }
        }
}

export default authController