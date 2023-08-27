import { connect } from 'mongoose';

const connectDB = async () => {
   try {
      await connect(process.env.DB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('DB conectada');
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
}

export default connectDB;