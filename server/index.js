const express = require('express');

const app = express();

console.log('Comenzando Node Send');

// Puerto
const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0', () => {
   console.log(`El servidor esta corriendo en el puerto ${port}`);
})