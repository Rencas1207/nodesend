import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';

// create server
const app = express();
app.use(express.json());

// Connect to Database
dotenv.config();
connectDB();

// port
const port = process.env.PORT || 4000;

// routes app
app.use('/api/users', userRoutes);

app.listen(port, '0.0.0.0', () => {
   console.log(`El servidor esta corriendo en el puerto ${port}`);
})