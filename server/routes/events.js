const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

module.exports = router;
router.use(cors());
router.use(express.json());
router.use(bodyParser.urlencoded({extended: false}));

// move to controllers

router.post('/new-event', (req, res) => {
    let headers = req.headers['authorization'];
    const token = headers.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let userId = decoded.userId;
    
    let title = req.body.title;
    let start = req.body.start;
    let end = req.body.end;
    let all_day = req.body.allDay;

    let event = models.Event.build({
        title: title,
        start: start,
        end: end,
        all_day: all_day,
        user_id: userId
    })

    event.save().then((savedEvent) => {
        res.json({eventAdded: true, event: savedEvent})
    }).catch((error) => {
        console.log(error)
        res.json({eventAdded: false, error: error})
    })

})

router.get('/fetch-all', (req, res) => {
    let headers = req.headers['authorization'];
    const token = headers.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let userId = decoded.userId;
    
    models.Event.findAll({
        where: {
            user_id: userId
        }
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})