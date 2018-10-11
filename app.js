const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// devDbUrl local auth for Mongodb
const devDbUrl = require('./dev_db_url');

//Set up DB
let mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Routes
const user = require('./routes/routes');

//Set App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', user);

// Set Port
const port = 9000;

app.listen(port, () => {
  console.log('server:' + port);
})
