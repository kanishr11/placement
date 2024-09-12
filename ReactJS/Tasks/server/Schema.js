const mongoose = require('mongoose');

const loginUsersData = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
},{versionKey:false})

const loginUsers = mongoose.model('LoginUsers',loginUsersData);

module.exports = {loginUsers};