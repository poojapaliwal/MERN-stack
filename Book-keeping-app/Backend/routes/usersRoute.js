const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();
const asyncHandler = require('express-async-handler');
const { set } = require('mongoose');
const generateToken = require('../utils/generateToken');


// Users route
// register route
usersRoute.post(
    '/register', 
    asyncHandler (async(req,res)=>{
        const {name, email, password} = req.body;

        const userExists = await User.findOne({email: email})

        if(userExists){
            throw new Error('userExists');
        }

        const userCreated = await User.create({name,email,password});
        res.json({
            _id : userCreated._id, 
            name: userCreated.name, 
            email : userCreated.email,
            password : userCreated.password,
            token: generateToken(userCreated._id)
        });

}));

// login route
usersRoute.post(
    "/login",
    asyncHandler(async(req,res)=>{
    
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && await user.isPasswordMatch(password)){
        res.status(200);

        res.json({
            _id : user._id, 
            name: user.name, 
            email : user.email,
            password : user.password,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401);

        throw new Error('Invalid credentials.')
    }
}));

// update route
usersRoute.put("/update",(req,res)=>{
    res.send("update!");
});

//fetch route
usersRoute.get("/fetch",(req,res)=>{
    res.send("fetch!");
});

// delete route
usersRoute.delete("/delete",(req,res)=>{
    res.send("delete!");
})

module.exports = usersRoute;

