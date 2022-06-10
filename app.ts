const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const sensorsRouter = require('./routes/sensors-endpoints');

require('./config/db');

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


sensorsRouter.SensorsRoutes(app);


module.exports;
