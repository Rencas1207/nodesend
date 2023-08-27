import User from "../models/Users.js";
import bcrypt from 'bcrypt';

const newUser = async (req, res) => {
   // check if the user is already registered
   const { email, password } = req.body;

   let user = await User.findOne({ email });

   if (user) {
      return res.status(400).json({ msg: 'El usuario ya está registrado' })
   }

   user = new User(req.body);

   //hass to password
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(password, salt)


   try {
      await user.save();

      res.json({ msg: 'Usuario creado correctamente' })
   } catch (error) {
      console.log(error);
   }

}

export {
   newUser
}