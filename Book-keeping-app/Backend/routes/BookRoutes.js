const express  = require('express');

const expressAsynchandler = require('express-async-handler');
const Book = require('../models/Book');

const bookRouter = express.Router();

// Create Book
bookRouter.post('/', expressAsynchandler(async (req,res)=>{
    const book = await Book.create(req.body);

    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('Book creating failed.')
    }
}));

// fetch Book
bookRouter.get(
    '/', 
    expressAsynchandler(async (req,res)=>{
    const book = await Book.find({});

    if(book){
        res.status(200);
        res.json(book);
    }
    else{
        res.status(500);
        throw new Error('There are no books.')
    }
})
);


module.exports = bookRouter;



