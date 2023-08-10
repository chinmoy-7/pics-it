import express from 'express'
import { auth } from '../Middleware/auth'
import { ProfileController,UploadController,getMyImages,getFollowedImage} from '../Controller/Features'
import { upload } from '../Middleware/Multer'
import { followOne,acceptFollow } from '../Controller/FriendReq'

const features=express.Router()
    
features.post("/profile",auth,ProfileController)
features.post("/upload-image",auth,upload.single("image"),UploadController)
features.get("/get-my-images",auth,getMyImages)
features.post("/get-followed-image",auth,getFollowedImage)

features.post("/send-follow-req",auth,followOne)
features.post("/accept-follow-req",auth,acceptFollow)


export {features}


