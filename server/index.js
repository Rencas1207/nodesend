const express = require('express');
const connectDB = require('./config/db');

// create server
const app = express();

// Connect to Database
connectDB();

// port
const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
   console.log(`El servidor esta corriendo en el puerto ${port}`);
})