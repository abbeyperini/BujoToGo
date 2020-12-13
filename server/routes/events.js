const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { sequelize } = require('../models');
const formats = require('../utils/dateFormat');

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
    
    let icon = req.body.icon;
    let title = req.body.title;
    let start = req.body.start;
    let end = req.body.end;
    let all_day = req.body.allDay;

    let event = models.Event.build({
        icon: icon,
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
        },
        order: [
            ['start', 'ASC']
        ]
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})

router.delete('/delete-event/:id', (req, res) => {
    let eventId = req.params.id;

    models.Event.destroy({
        where: {
            id: eventId
        }
    }).then((result) => {
        res.json({eventDelete: true, result: result})
    }).catch((error) => {
        res.json({eventDelete: false, error: error})
    })
})

router.post('/edit-event', (req, res) => {

    let eventId = req.body.id;
    let title = req.body.title;
    let start = req.body.start;
    let end = req.body.end;
    let all_day = req.body.allDay;
    let icon = req.body.icon;

    models.Event.update({
        icon: icon,
        title: title,
        start: start,
        end: end,
        all_day: all_day,
    }, {
        where: {
            id: eventId
        }
    }).then(result => {
        console.log(result)
        res.json({eventEdit: true, result: result})
    }).catch(error => {
        console.log(error)
        res.json({eventEdit: false, error: error})
    })
})

router.get('/fetch-single/:id', (req, res) => {
    let eventId = req.params.id;

    models.Event.findOne({
        where: {
            id: eventId
        }
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})

router.get('/monthly-events', (req, res) => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const startDate = new Date(year, month, 01, 0, 0, 0, 0)
    const endDate = new Date(year, (month + 1), 01, 0, 0, 0)

    models.Event.findAll({
        where: {
            start: {
                [Op.gt]: startDate,
                [Op.lt]: endDate
            }
        },
        order: [
            ['start', 'ASC']
        ]
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})

router.get('/weekly-events', (req, res) => {
    let week = formats.weeklyFormat();

    models.Event.findAll({
        where: {
            start: {
                [Op.gt]: week.start,
                [Op.lt]: week.end
            }
        },
        order: [
            ['start', 'ASC']
        ]
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})

router.get('/daily-events', (req, res) => {
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const TODAY_END = new Date().setHours(24, 0, 0, 0)

    models.Event.findAll({
        where: {
            start: {
                [Op.gt]: TODAY_START,
                [Op.lt]: TODAY_END
            }
        },
        order: [
            ['start', 'ASC']
        ]
    }).then((result) => {
        res.json({events: result})
    }).catch((error) => {
        res.json({error: error})
    })
})