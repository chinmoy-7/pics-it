import express from "express";
import { getProfile } from "../Service/Profile";
import { PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
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
      user_name:req.user.username
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

    let modifedImages=await Promise.all(allPhotos.map(async(photo:any)=>{
      const getObjParam: any = {
        Bucket: bucketName,
        Key: photo["image_name"]
      };
      const command = new GetObjectCommand(getObjParam);
      let url = await getSignedUrl(s3,command,{expiresIn:3600})
      photo["image_url"]=url
      return photo
    }))

    res.send({
        status:200,
        modifedImages
    })
    
  } catch (error:any) {
    throw new Error(error);
  }
};

export const getFollowedImage=async(req:any,res:any)=>{
  try {
      let followed:string[]=[];
      const user = await getProfile(req.user)
      if(user)
       followed = user.friends
      const allPhotos:any = await photos.find({
        user_id:{$in:[...followed]}
      })

      let modifedPhotos=await Promise.all(allPhotos.map(async (photo: any) => {
        const getObjParam: any = {
          Bucket: bucketName,
          Key: photo["image_name"]
        };
        const command = new GetObjectCommand(getObjParam);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        photo["image_url"] = url;
        return photo;
      }));
      let response = {
        modifedPhotos,
        user
      }
      return res.send({
        status:200,
        response
      })
  } catch (error:any) {
    throw new Error(error)
  }
}
