'use strict';
require('dotenv').config();
const cors=require('cors');
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute'); //tämä saa siis catrouten
const userRoute = require('./routes/userRoute');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
