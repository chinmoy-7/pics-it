import express from 'express'
import bodyparser, { urlencoded } from 'body-parser'
import { connectDB } from './DB/connect'
import router from './Routes/LoginAndSignup'
import dotenv from "dotenv"
import cors from "cors"
import { features } from './Routes/Features'
dotenv.config()

const app:express.Application=express()

app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyparser.urlencoded())
app.use(cors())
app.use("",router)
app.use("",features)

const startServer = async (app:express.Application)=>{
    await connectDB()
    app.listen(4000,()=>{
        console.log("Server up at 4000")
    })
}

startServer(app)