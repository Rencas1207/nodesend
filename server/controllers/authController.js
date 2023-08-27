import User from "../models/Users.js";
import bcrypt from 'bcrypt'

import { validationResult } from 'express-validator'

const authenticateUser = async (req, res, next) => {
   // check for errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
   }

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
      const token = jwt.sign({
         id: user._id,
         name: user.name,
         email: user.email
      }, process.env.JWT_SECRET, {
         expiresIn: '8h'
      });

      res.json({ token })
   } else {
      res.json(401).json({ msg: "Password Incorrecto" });
      return next();
   }
}

const authenticatedUser = async (req, res, next) => {
   res.json({ user: req.user })
}

export {
   authenticateUser,
   authenticatedUser
}