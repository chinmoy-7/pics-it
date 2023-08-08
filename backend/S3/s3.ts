// import  AWS from 'aws-sdk'
import { S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
dotenv.config()
const bucketName=process.env.S3_BUCKET
const region=process.env.AWS_REGION
const secret=process.env.AWS_SECRET
const access = process.env.AWS_ACCESS
let s3:any;
if(typeof(secret)=="string" && typeof(access)=="string"){
 s3=new S3Client({
    credentials:{
        accessKeyId:access,
        secretAccessKey:secret
    },
    region:region

})
}

export {s3};