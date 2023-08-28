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
   const { original_name } = req.body;

   const link = new Link();

   link.url = shortid.generate();
   link.name = shortid.generate();
   link.original_name = original_name;

   // if the user is authenticated
   console.log(req.user);

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

export {
   newLink,
}