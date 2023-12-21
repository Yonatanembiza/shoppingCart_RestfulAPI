// Importing 
const express = require('express');
const routes = require('./Router/routes')
const cors = require('cors');

// creating the app
const app = express();

// middlewares 
app.use(cors());
app.use(express.json());
app.use('/Products', routes);
app.listen(5000, ()=>{
    console.log("Server is startign at 5000...")
});