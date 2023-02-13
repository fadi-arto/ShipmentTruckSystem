const { model } = require('mongoose');
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")
const notfication = require('../../Entity/notfication')

//add data to mongoose

const AddNotification = async (data,Sender ,company ,results) => {
    
   
    notfication.create({ massage: data, sender: Sender , company : company ,resiver :data.TOemail}, (err, result) => {
        if (err) {
            console.log(err)
            results(err, null)
        }
        else {
            results(null, result)
        }
    })
}














module.exports = { AddNotification };