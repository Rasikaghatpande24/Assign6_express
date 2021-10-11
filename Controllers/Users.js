const { response } = require('express');
const User = require('../Models/users');

exports.usersignUp = (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    const user = new User({
        email,
        password,
        firstname,
        lastname
    });

    user.save()
        .then(response => {
            res.status(400).json({ message: "User Registered succesfully", users: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.userlogIn = (req, res) => {
    const { email, password } = req.body;
    User.find({ email: email, password: password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({ message: "User Authenticated succesfully", isAuthenticated: true, userlogin: response })
            } else {
                res.status(200).json({ message: "User not Authenticated succesfully", isAuthenticated: false, userlogin: response })
            }

        })
        .catch(err => {
                res.status(500).json({ error: err })
            }

        )
}