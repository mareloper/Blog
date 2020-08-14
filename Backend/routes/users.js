const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const mongoose = require('mongoose');

//post route for registeration
router.post("/register", async(req, res) => {

    // get user data from font end
    const {
        name,
        surname,
        email,
        password,
    } = req.body;


    // Else register/save new user.
    try {

        const newUser = new Users({
            _id: mongoose.Types.ObjectId(),
            name: name,
            surname:surname,
            email: email,
            password: password
            
        })

        newUser
            .save((err, data) => {
                if (err) {
                    return console.log(err);
                } else {
                    res.status(201).json({
                        message: "User has been saved to the Database",
                        Users: data,
                    });
                }

            });

    } catch (error) {

        return res.status(500).json({
            message: "Failed to save new user",
            err: error
        })

    }

    // //check if user exits already
    // userFound = await Users.find({ email: email });
    // if (userFound) {
    //     return res.status(201).json({
    //         message: "User is already registered.",
    //         data: userFound
    //     })
    // }

});

module.exports = router;