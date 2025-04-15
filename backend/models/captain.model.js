const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be atleast 3 characters']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be atleast 3 characters']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be atleast 5 characters']
    },
    password:{
        type:String,
        required:true,
        select:false
    },

    socketID:{
        type:String
    },
    status:{
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive' 
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 characters'],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be atleast 3 characters'], 
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'Capacity must be atleast 1'],
        },
        vehicleType:{
            type:String,
            enum: ['car', 'motorcycle', 'auto'],
            required:true,
        }
    },
    location:{
        lat:{
            type:Number,
            
        },
        long:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken =  function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;;