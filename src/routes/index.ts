
import { Router } from "express";
import SendRouter from "./send"
import multer from "multer"
import path from "path"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../', 'assets/'))
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + '.' + "jpeg")
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024
//     },
//     fileFilter: function (req, file, callback) {
//         var ext = path.extname(file.originalname);
//         if ( ext!==".jpg" && ext!=='.jpeg' && ext !== ".png") {
//             return callback(new Error('Only images are allowed'))
//         }
//         callback(null, true)
//     },
// })

const router = Router({mergeParams:true})

router.use("/send",SendRouter)

export default router