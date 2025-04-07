const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const BlacklistToken = require('../models/blacklistToken.model');


module.exports.registerCaptain = async(req,res,next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    
    const {fullname,email,password,vehicle} = req.body;
   

    const isCaptainAlreadyRegister =await captainModel.findOne({email});

    if(isCaptainAlreadyRegister){
        return res.status(400).json("Captain Already Registered");
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        vehicleType: vehicle.vehicleType,
        capacity: vehicle.capacity,
    });

    const token = captain.generateAuthToken();
    res.status(201).json({token,captain});
}

module.exports.captainLogin = async (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json('Invalid Email or Password');
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json('Invalid Email or Password');
    }

    const token = await captain.generateAuthToken();

    res.cookie('token', token);
    res.status(200).json({token, captain});

}

module.exports.getCaptainProfile = async (req,res,next) =>{
    return res.status(200).json({captain: req.captain});
}

module.exports.captainLogout = async (req,res,next) =>{

    res.clearCookie('token'); // ✅ Fix typo

    const token = req.cookies.token || req.headers.authorixation.split(" ")[1];
    const isBlackListed = await BlacklistToken.findOne({token: token}); 
    
    res.status(200).json({message:"Logged out successfully"});
}