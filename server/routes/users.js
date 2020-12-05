const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

module.exports = router;
router.use(cors());
router.use(express.json());
router.use(bodyParser.urlencoded({extended: false}));

// move to controllers

router.post('/authenticate', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        models.user.findOne({
            where: {
                username: username
            }
        }).then(user => {
            console.log(user)
            if (user === null) {
                res.json({login: false})
            } else {
                let storedPassword = user.password;

                bcrypt.compare(password, storedPassword)
                .then((result) => {
                    // configure to return what front end is expecting
                    res.json({login: true, user: user.id})
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
        models.user.findOne({
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
                        let user = models.user.build({
                            first_name: firstName,
                            last_name: lastName,
                            username: username,
                            password: hash
                        });

                        user.save().then((savedUser) => {
                            // configure to return what front end is expecting
                            res.json({userAdded: true, user: user.id})
                        }).catch((error) => {
                            console.log(error)
                        })
                    })
                })
            }
        })
    } else {
        res.json({success: false})
    }
})