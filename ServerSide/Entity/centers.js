const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CenterShema = mongoose.Schema({
Location :{
    type : String ,
    required : true,
},
City :{
    type : String ,
    required : true,
},
Company:{
    type:String 
},
cost:{
    type:Number
},
branch:{
    type:Number ,
    required : true
},
email:{
    type:String,
    required : true,
    unique: true
},
Image:{
type:String
}

},{timestamps :true});


const centers = mongoose.model('centers',CenterShema);
module.exports =centers;




