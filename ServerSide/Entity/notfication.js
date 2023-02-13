const mongoose = require('mongoose');;
const bcrypt = require('bcrypt');


const EmailSchema = new mongoose.Schema({
    massage: {
        type: String,
        required: true,
    },

    sender: {
        type: String,

    },
    resiver: {
        type: String,

    }
    ,
    company: {
        type: String,

    }

}, { timestamps: true });








const Email = mongoose.model('Email', EmailSchema);
module.exports = Email;