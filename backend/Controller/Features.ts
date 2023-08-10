import express from "express";
import { getProfile } from "../Service/Profile";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../S3/s3";
import { RandomName } from "../Helper/util";
import sharp from "sharp";
import photos from "../Model/Photos";
import moment from "moment";
import { getProfileImages } from "../Service/Post";



const bucketName = process.env.S3_BUCKET;

export const ProfileController = async (req: any, res: express.Response) => {
  try {
    const result = await getProfile(req.user);
    return res.send({
      status: 200,
      message: "success",
      data: result,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
export const UploadController = async (req: any, res: any) => {
  try {
    const imageName = RandomName();
    const buffer = await sharp(req.file.buffer)
      .resize({
        height: 1080,
        width: 1080,
        fit: "contain",
      })
      .toBuffer();

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: buffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
    const uploadedImage = await photos.create({
      user_id: req.user.userId,
      image_name: imageName,
      time_added: currentTime,
      isDeleted: 0,
    });

    res.send({
      status: 200,
      data: uploadedImage,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMyImages = async (req: any, res: any) => {
  try {
    const userId=req.user;
    const allPhotos=await getProfileImages(userId);
    allPhotos.sort((a:any,b:any):any=>{
        const aTime = moment(a.time_added);
        const bTime = moment(b.time_added);
        
        return aTime.diff(bTime);
    })

    let userPhotos:string[]=[]
    for(let i of allPhotos){
        if(typeof(i.image_name)=="string")
        userPhotos.push(i.image_name)
    }
    console.log(userPhotos)
    res.send({
        status:200,
        images:userPhotos
    })
    
  } catch (error:any) {
    throw new Error(error);
  }
};

export const getFollowedImage=async(req:any,res:any)=>{
  try {
      const {followed}=req.body
      const allPhotos = await photos.find({
        user_id:{$in:[...followed]}
      })
      return res.send({
        status:200,
        allPhotos
      })
  } catch (error:any) {
    throw new Error(error)
  }
}
