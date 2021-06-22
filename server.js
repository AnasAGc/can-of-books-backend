'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
const mongoose = require('mongoose');
const MONGODB=process.env.MONGODB_URI
app.use(cors());

const {
    bookHandler,
    handleAddBook,
    handleDeleteBook,
    homeHandler,
} = require('./moduls/seedCollection');

mongoose.connect('mongodb://localhost:27017/myfavariteBook', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/',homeHandler);
app.get('/book',bookHandler)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
