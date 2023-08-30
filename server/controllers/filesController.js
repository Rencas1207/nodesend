import multer from 'multer';
import shortid from 'shortid';

const uploadFile = async (req, res, next) => {
   const configMulter = {
      limits: { fileSize: req.user ? 1024 * 1024 * 10 : 1024 * 1024 },
      storage: multer.diskStorage({
         destination: (req, file, cb) => {
            cb(null, './uploads')
         },
         filename: (req, file, cb) => {
            const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
            cb(null, `${shortid.generate()}${extension}`)
         },
         // fileFilter: (req, file, cb) => {
         //    if (file.mimetype === "application/pdf") {
         //       return cb(null, true); // no allowed pdf
         //    }
         // },
      })
   }

   const upload = multer(configMulter).single('file');

   upload(req, res, async (error) => {
      console.log(req.file);
      if (!error) {
         res.json({ file: req.file.filename });
      } else {
         console.log(error);
         return next()
      }
   })
}

const deleteFile = async (req, res) => {
   console.log('desde eliminar archivo')
}


export {
   uploadFile,
   deleteFile
}