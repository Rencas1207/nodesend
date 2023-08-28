import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import linkRoutes from './routes/links.js';

// create server
const app = express();
app.use(express.json());

// Connect to Database
dotenv.config();
connectDB();

// Enable reading the values of a body
app.use(express.json());

// port
const port = process.env.PORT || 4000;

// routes app
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);

app.listen(port, '0.0.0.0', () => {
   console.log(`El servidor esta corriendo en el puerto ${port}`);
})