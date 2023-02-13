const {model}  = require('mongoose') ; 
const Shipment = require('../../Entity/Shipment');
const clients = require('../../Entity/clients');
const QRCode = require('qrcode');
const crypto = require("crypto")
const center = require('../../Entity/centers')

//add data to mongoose

const  AddShipments = async (data, center_id , Location , City ,results) =>{
                const shipmentes = await Shipment.find()
                const counter = shipmentes.length
                    Shipment.create({center:center_id,City:City ,SourceLocation:Location,DistinationLocation:data.DistinationLocation,Services:data.Services,Type_Of:data.Type_Of,Weight:data.Weight,EmailSource:data.EmailSource,EmailDistination:data.EmailDistination,priority:data.priority,state:"WAIT" , DistinationCity:data.DistinationCity , Key : counter + 1 },(err,result)=>{
                        if(err){
                            console.log(err)
                             results(err, null)
                             }
                         else{
                             results(null,result)
                          }
                    })
                }














module.exports = {AddShipments} ;