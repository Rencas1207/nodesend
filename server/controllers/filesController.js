import multer from 'multer';
import shortid from 'shortid';
import fs from 'fs';

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
         // For when we want to validate that a particular format, in this case pdf, is not uploaded.
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
   try {
      fs.unlinkSync(`./uploads/${req.file}`);
      console.log('archivo eliminado');
   } catch (error) {
      console.log(error);
   }
}

const download = async (req, res) => {
   const file = './uploads/' + req.params.file;
   res.download(file);
}

export {
   uploadFile,
   deleteFile,
   download
}