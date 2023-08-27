import User from "../models/Users.js";
import bcrypt from 'bcrypt'

const authenticateUser = async (req, res, next) => {
   // check for errors

   // look for the user to see if he is registered
   const { email, password } = req.body;
   const user = await User.findOne({ email });

   if (!user) {
      res.status(401).json({ msg: 'El usuario no existe' });
      return next();
   }

   // verify the password and authenticate the user
   if (bcrypt.compareSync(password, user.password)) {
      // Create JWT

   } else {
      res.json(401).json({ msg: "Password Incorrecto" });
      return next();
   }
}

const authenticatedUser = async (req, res) => {

}

export {
   authenticateUser,
   authenticatedUser
}