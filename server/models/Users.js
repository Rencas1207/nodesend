import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
   },
   name: {
      type: String,
      required: true,
      trim: true
   },
   password: {
      type: String,
      required: true,
      trim: true
   }
});

const User = mongoose.model("User", usersSchema);

export default User;