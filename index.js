const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const app = express();
const logger = require('./logger');
const router = require('./courses');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
//app.use(logger);
app.use(router);



const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Working');
})