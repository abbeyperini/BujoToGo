require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');

app.use(cors());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({success: true});
})

app.listen(8080, () => {
    console.log("Server is running...");
})