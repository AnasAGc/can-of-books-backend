'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
const mongoose = require('mongoose');
const MONGODB=process.env.MONGODB_URI
const bookHandler=require('./moduls/seedownerCollection')
app.use(cors());


function homeHandler(req,res){
    res.send('Home Route');
}
app.get('/',homeHandler);
app.get('/book',bookHandler)

// mongoose.connect('mongodb://localhost:27017/myfavariteBook', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})