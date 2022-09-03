const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    id:{
        type:Number,
        required:[true,"please enter ID number"]
    },
    name:{
        type:String,
        required:[true,"Please enter your name"],
        trim:true
    },
    gender:{
        type:String,
        required:[true,"Please enter your gender"]
    },
    contact:{
        type:String,
        maxLength:[11,"Never exceed 11 character"]
    },
    address:{
        type:String,
        required:[true,"Please enter your address"]
    },
    photoUrl:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
           }
       ],
       createdAt:{
        type:Date,
        default:Date.now
       }
})


module.exports = mongoose.model("Users",userModel);