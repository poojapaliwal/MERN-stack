const express = require('express');
const User = require('../models/User');
const usersRoute = express.Router();
const asyncHandler = require('express-async-handler')

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
        res.send(userCreated);

}));

// login route
usersRoute.post("/login", (req,res)=>{
    res.send("login!");
});

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

