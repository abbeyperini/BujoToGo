const express = require('express');
const router = express.Router();
const models = require('../models');
const cors = require('cors');
const bcrypt = require('bcrypt');

module.exports = router;
router.use(cors());
router.use(express.json());

// move to controllers

router.post('/authenticate', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        models.Users.findOne({
            where: {
                username: username
            }
        }).then(user => {

            if (user === null) {
                res.json({login: false})
            } else {
                let storedPassword = user.password;

                bcrypt.compare(password, storedPassword)
                .then((result) => {
                    // configure to return what front end is expecting
                    res.json({login: true, user: user})
                })
            }
        })
    }
})

router.post('/register', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        models.Users.findOne({
            where: {
                username: username
            }
        }).then(user => {
            if (user) {
                // configure to return what front end is expecting
                res.json({userAdded: false});
            } else {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        let user = models.Users.build({
                            first_name: firstName,
                            last_name: lastName,
                            username: username,
                            password: hash
                        });

                        user.save().then((savedUser) => {
                            // configure to return what front end is expecting
                            res.json({userAdded: true, user: user})
                        }).catch((error) => {
                            console.log(error)
                        })
                    })
                })
            }
        })
    }
})
