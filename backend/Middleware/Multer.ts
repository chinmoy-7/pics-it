import multer from 'multer'
import path from 'path';
import moment from 'moment'


const storage = multer.memoryStorage()
export const upload = multer({ storage: storage })

