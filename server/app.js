require('dotenv').config();
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors'
import passport from 'passport'

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
app.use(passport.initialize())


const auth = require('./routes/auth');
app.use('/auth', auth);


module.exports = app;
