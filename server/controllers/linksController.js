import Link from "../models/Link.js";
import shortid from 'shortid';
import bcrypt from 'bcrypt';

import { validationResult } from 'express-validator'

const newLink = async (req, res) => {
   // check for errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
   }

   // create a object of Link
   const { original_name, name } = req.body;

   const link = new Link();

   link.url = shortid.generate();
   link.name = name;
   link.original_name = original_name;

   // if the user is authenticated
   if (req.user) {
      const { password, downloads } = req.body

      // assign the number of downloads to the link
      if (downloads) {
         link.downloads = downloads;
      }

      // assign pwd
      if (password) {
         const salt = await bcrypt.genSalt(10);
         link.password = await bcrypt.hash(password, salt);
      }

      //assing author
      link.author = req.user.id;
   }

   // store in the db
   try {
      await link.save();
      return res.json({ msg: `${link.url}` })
   } catch (error) {
      console.log(error);
   }
}

// get link
const getLink = async (req, res, next) => {

   const { url } = req.params;

   // check if the link exists
   const link = await Link.findOne({ url });

   if (!link) {
      res.status(404).json({ msg: 'Ese enlace no existe' });
      return next();
   }

   // if the link exists
   res.json({ file: link.name, password: false })

   next();
}

// get a list of all links
const allLinks = async (req, res) => {
   try {
      const links = await Link.find({}).select('url -_id');
      console.log(links)
      res.json({ links });
   } catch (error) {
      console.log(error);
   }
}

const hasPassword = async (req, res, next) => {
   const { url } = req.params;

   // check if the link exists
   const link = await Link.findOne({ url });

   if (!link) {
      res.status(404).json({ msg: 'Ese enlace no existe' });
      return next();
   }

   if (link.password) {
      return res.json({ password: true, link: link.url })
   }

   next();
}

const verifyPassword = async (req, res, next) => {
   const { url } = req.params;
   const { password } = req.body;

   // consult through the link
   const link = await Link.findOne({ url });

   // verify pwd
   if (bcrypt.compareSync(password, link.password)) {
      // allow the user to download the file
      next();
   } else {
      return res.status(401).json({ msg: 'Password incorrecto' });
   }
}

export {
   newLink,
   getLink,
   allLinks,
   hasPassword,
   verifyPassword
}