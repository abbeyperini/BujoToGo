const express = require('express');
const app = express();
const models = require('./models');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.json({success: true});
})

app.listen(8080, () => {
    console.log("Server is running...");
})