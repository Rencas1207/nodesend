import Link from "../models/Link.js";
import shortid from 'shortid';

// export link
const newLink = async (req, res) => {
   // check for errors

   // create a object of Link
   const { original_name, password } = req.body;

   const link = new Link();

   link.url = shortid.generate();
   link.name = shortid.generate();
   link.original_name = original_name;
   link.password = password;

   // if the user is authenticated

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