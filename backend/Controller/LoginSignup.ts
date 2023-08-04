import express from 'express'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import signup from '../Model/Register'

export const LoginController=async (req:express.Request,reply:express.Response)=>{
        try {
            const {username,email,password}=req.body
            const user:{email:string,password:string,username:string}|null = await signup.findOne({username:username})
            if(!user){
                return reply.send({
                    status:404,
                    message:"No user Found"
                })
            }
            let isCheck:boolean;
            if(user!==null){
    
            isCheck = await bcrypt.compare(password,user.password)
    
            if(isCheck){
                const token = jwt.sign({email:email},`${process.env.JWT_KEY}`)
                return reply.send({
                    status:200,
                    jwt_token:token
                })
            }else{
              return reply.send({
                status:403,
                jwt_token:"Email/password is wrong"
            })
            }
            }
    } catch (error:any) {
        throw new Error(error)
    }
}
export const SignupController=async (req: express.Request, reply: express.Response) => {
    try {
      const { username, password,email } = req.body;
      const isExist = await signup.findOne({username:username});
      if(isExist){
          return reply.send({
              status:200,
              message:"User already Exists"
          })
      }
      const hashedPassword=await bcrypt.hash(password,10)
      const newUser = await signup.create({
        username:username,
        email: email,
        password: hashedPassword,
      });
  
      reply.send({
        status: 200,
        data: {
          newUser,
        },
      });
    } catch (error:any) {
      throw new Error(error)
    }
  }