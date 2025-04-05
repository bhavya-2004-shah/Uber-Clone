const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    console.log(token);

    if(!token){
        return res.status(401).json({message:'Unauthorized token not found'});
    }

    const isBlackListed = await userModel.findOne({token: token});
    if(isBlackListed){
        return res.status(401).json({message:'Unauthorized token blacklisted'});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        
        req.user = user;
        console.log(user);
         return next();

        if(!user){
            return res.status(401).json({message:'Unauthorized'});
        }
    }
    catch(err){
        return res.status(401).json({message:'Unauthorized token not found in the catch'});
    }

}
