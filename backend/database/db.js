const mongoose = require('mongoose');


function connectTodb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=> console.log("COnnected to DB"));
}

module.exports= connectTodb;