const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const connectTodb = require('./database/db');
const userRoute = require('./routes/user');
const captainRoute = require('./routes/captain.routes');
const cookieParser = require('cookie-parser');


connectTodb();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRoute);
app.use('/captains', captainRoute);

app.get('/', (req,res) =>{
    res.send("hello world")
});



module.exports = app;