import express from 'express'
import bodyparser from 'body-parser'
import { connectDB } from './DB/connect'
import router from './Routes/LoginAndSignup'
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app:express.Application=express()

app.use(express.json())
app.use(cors())
app.use("",router)


const startServer = async (app:express.Application)=>{
    await connectDB()
    app.listen(4000,()=>{
        console.log("Server up at 4000")
    })
}

startServer(app)