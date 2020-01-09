require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require("cors")

mongoose
  .connect('mongodb://localhost/TheChallenger', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const app = express();


const whitelist = [
  "http://localhost:19000",
  "http://localhost:19001"
];

const corsConfig = {
  origin: (origin, cb) => {
    cb(null, whitelist.includes(origin))
  },
  credentials: true
}
app.use(cors(corsConfig))
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
