import express from 'express'
import { auth } from '../Middleware/auth'
import { ProfileController,UploadController,getMyImages } from '../Controller/Features'
import { upload } from '../Middleware/Multer'

const features=express.Router()
    
features.post("/profile",auth,ProfileController)
features.post("/upload-image",auth,upload.single("image"),UploadController)
features.get("/get-my-images",auth,getMyImages)


export {features}


