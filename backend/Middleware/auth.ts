import express from 'express'
import jwt from 'jsonwebtoken'


export const auth=async(req:any,res:express.Response,done:express.NextFunction)=>{
    try {
        let checkToken
        const {token} = req.headers
        // console.log(typeof(token),"<==========",typeof(process.env.JWT_KEY))
        if(typeof(token)=="string"&&typeof(process.env.JWT_KEY)=="string")
        checkToken = await jwt.verify(token,process.env.JWT_KEY)

        if(!token){
            return res.send({
                status:500,
                message:"Invalid Token"
            })
        }
        req["user"]=checkToken
        console.log(req.rawHeader)
        done()
        

    } catch (error:any) {
        return res.send({
            status:400,
            message:"Invalid Token"
        })
    }
}

