const mongoose = require("mongoose")


export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://chinmoydehingia:HWmWqmuqQnSSzvdi@cluster0.x11dupq.mongodb.net/?retryWrites=true&w=majority")
    console.log("Connected To Mongoose")
}
