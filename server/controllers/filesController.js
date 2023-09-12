import multer from 'multer';
import shortid from 'shortid';
import fs from 'fs';
import Link from '../models/Link.js';

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

const download = async (req, res, next) => {
   // Get link
   const { file } = req.params;
   const link = await Link.findOne({ name: file });

   const fileUploaded = './uploads/' + file;
   res.download(fileUploaded);
   console.log(link);

   // delete file and database entry
   // if downloads are equal to 1 - delete the entry and delete the file
   const { downloads, name } = link;

   if (downloads === 1) {
      // delete file
      req.file = name;

      // delete entry the db
      await Link.findOneAndRemove(link.id);
      next();
   } else {
      link.downloads--;
      await link.save();
   }
   // if discharges are greater than 1 - subtract 1
}

export {
   uploadFile,
   deleteFile,
   download
}