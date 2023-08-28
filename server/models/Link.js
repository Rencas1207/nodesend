import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const linkSchema = new Schema({
   url: {
      type: String,
      require: true
   },
   name: {
      type: String,
      required: true
   },
   original_name: {
      type: String,
      required: true
   },
   downloads: {
      type: Number,
      default: 1
   },
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      default: null
   },
   password: {
      type: String,
      default: null
   },
   created: {
      type: Date,
      default: Date.now()
   }
})

const Link = mongoose.model("Link", linkSchema);

export default Link;