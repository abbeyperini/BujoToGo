const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

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
                    if (result) {
                        const token = jwt.sign({userId: user.id}, process.env.JWT_KEY)
                        res.json({login: true, token: token})
                    } else {
                        res.json({login: false})
                    }
                })
                .catch((error) => {
                    res.json({login: false, error: error})
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
                            const token = jwt.sign({userId: user.id}, 'SECRETKEY');
                            res.json({userAdded: true, token: token})
                        }).catch((error) => {
                            console.log(error)
                            res.json({userAdded: false})
                        })
                    })
                })
            }
        })
    } else {
        res.json({success: false})
    }
})
