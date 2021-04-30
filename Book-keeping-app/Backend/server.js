/**  @format */

const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
require('./config/dbConnect')();
const User = require('./models/User')
const mongoose = require('mongoose');
const error = require('./middlewares/errorMiddlewaresHandler');
const usersRoute = require('./routes/usersRoute');
const bookRouter = require('./routes/BookRoutes');
const app = express();

app.use(express.json());

// Routes
// Users
app.use('/api/user', usersRoute );

// books
app.use('/api/books', bookRouter );

// Error Handler
app.use(error.errorMiddlewaresHandler); 

// username:Pooja
// password:JWNVGu4LbUXSSpq0
// mongodb+srv://Pooja:JWNVGu4LbUXSSpq0@cluster0.p7akq.mongodb.net/test

const PORT = process.env.PORT ||  5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `);
})