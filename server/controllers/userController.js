import User from "../models/Users.js";

const newUser = async (req, res) => {
   // check if the user is already registered
   const { email } = req.body;

   let user = await User.findOne({ email });

   if (user) {
      return res.status(400).json({ msg: 'El usuario ya está registrado' })
   }

   user = await new User(req.body);
   user.save();

   res.json({ msg: 'Usuario creado correctamente' })
}

export {
   newUser
}