const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const connection = require('./connection/connection')
const mongoose = require('mongoose');
const cors = require('cors');



app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//routes declaration
const usersRoutes= require("./routes/users")


//middleware routes that handle requests
app.use('/users',usersRoutes)


module.exports = app;
