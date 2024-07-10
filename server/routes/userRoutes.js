const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.post("/register", async (req, res) => {
    try{

        const UserExists = await User.findOne({email:req.body.email});
        if(UserExists){
            res.send({
                success:false,
                message:"User already exists"
            });
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json("User has been registered successfully");
    }
    catch(err){
        res.status(500).json(err);
    }

});

router.post("/login", async (req, res) => {

});


module.exports = router;