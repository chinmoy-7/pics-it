import multer from 'multer'
import path from 'path';
import moment from 'moment'


const storage = multer.memoryStorage()
export const upload = multer({ storage: storage })

// console.log(path.dirname(__dirname))
// // Set up multer storage for file uploads (optional, you can customize as needed)
// const storage = multer.diskStorage({
//     destination: function (req:any, file:any, cb:any) {
//       // Define the destination folder where uploaded files will be stored
//       cb(null, path.dirname(__dirname)+'/upload');
//     },
//     filename: function (req:any, file:any, cb:any) {
//       // Define the filename for uploaded files (you can customize this too)
//       // cb(null, moment().format("YYYY-MM-DD") + '-' + file.originalname);
//       cb(null, "file"+path.extname(file.originalname));
//     },
//   });
  
// const upload = multer({ storage: storage }).single('image');

// export const uploadMiddleware = (req:any, res:any, next:any) => {
//   upload(req, res, (err:any) => {
//     console.log("Working")
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     next();
//   });
// };
  
