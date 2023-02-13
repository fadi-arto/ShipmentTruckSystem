const mongoose = require('mongoose')
const Schema = mongoose.Schema();



const planschema = mongoose.Schema({

      CaR: {
            type: String,
            required: true
      },
      shippment: {
            type: Array,
            //    required : true
      },
      start_time: {
            type: Array,
            required: true
      },
      source_location: {
            type: Array,
            required: true

      },
      distination_location: {
            type: Array
            // required : true
      },
      distination_City: {
            type: String
            // required : true
      },
      Company: {
            type: String,
            required: true
      },
      Center: {
            type: String,
            required: true
      },
      Status: {
            type: String,
            required: true
      }


}, { timestamps: true })

const plane = mongoose.model('plane', planschema);
module.exports = plane;