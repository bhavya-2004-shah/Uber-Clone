const userModel = require('../models/user');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    // console.log(token);

    if(!token){
        return res.status(401).json({message:'Unauthorized token not found'});
    }

    const isBlackListed = await BlacklistToken.findOne({token: token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized token blacklisted'});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        
        req.user = user;
        // console.log(user);
         return next();

        if(!user){
            return res.status(401).json({message:'Unauthorized'});
        }
    }
    catch(err){
        return res.status(401).json({message:'Unauthorized token not found in the catch'});
    }

}


module.exports.authCaptain = async (req, res, next) => {
    // const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'Unauthorized token not found'});
    }

    const isBlackListed = await BlacklistToken.findOne({token: token});

    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized token blacklisted'});
    }

    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    }
    catch (err){
        console.log(err);
        return res.status(401).json({message:'Unauthorized token not found in the catch'});
    }

}
