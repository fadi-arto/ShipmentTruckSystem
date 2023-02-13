const express = require("express");
const {GetDetailsShipment , SendEmail , GetShipmentDetailsMap , GetShipmentDetails , GetShipmentNotDone , GetShipmentDirect ,  newclient, deleteclient, GetDetailsClient , Updateclient ,AddShipment,table_for_client } = require("../controller/client");
const {getShipment,Updateshipment_state,deletesshipment_by_id,Updateshipment_priority,get_location_by_carplate_for_shipment,get_Quantity_by_carplate_for_shipment,Update_shipment_cost ,Update_shipment_service,Update_shipment_Evaloation,Update_shipment_LOcation,Update_shipment_Lateshipment,get_shippment_done,get_shippment_by_id,Update_shipmen_discount_rate_cost} =require("../controller/Shipment")
const passport = require('passport');
const auth = require('../auth/auth')
var router = express.Router();

router.get('/getShipment', getShipment);
router.get('/GetShipmentNotDone' , GetShipmentNotDone)
router.post("/Add_Client", newclient);
router.delete("/Delete_Client/:id", deleteclient);
router.put("/Update_Client/:id", Updateclient);
router.post("/Add_Shipment", AddShipment);//
router.put("/Update_shipment_cost/:id", Update_shipment_cost);
router.put("/Update_state_shipmint/:id", Updateshipment_state);
router.put("/Update_Evalution_shipmint/:id", Update_shipment_Evaloation);
router.put("/Update_Late_shipment_shipmint/:id", Update_shipment_Lateshipment);
router.put("/Update_Location_shipmint/:id", Update_shipment_LOcation);
router.get('/GetDetailsClient' ,auth.sign_client , GetDetailsClient)
router.get('/GetDetailsShipment/:id' , GetDetailsShipment)
router.get('/GetShipmentDirect/:id' , GetShipmentDirect)
router.get('/GetShipmentDetails/:key' , GetShipmentDetails)
router.post('/GetShipmentDetailsMap',GetShipmentDetailsMap)
router.post('/SendEmail',SendEmail)

router.get('/getShipment_by_id/:id', get_shippment_by_id);
router.get('/getShipment_state_done', get_shippment_done);
router.put("/Update_service_shipmint/:id", Update_shipment_service);
router.delete("/Delete_shipmint/:id",deletesshipment_by_id );
router.put("/Update_priority_shipmint/:id", Updateshipment_priority);
router.get('/getlocation_byid/:id', get_location_by_carplate_for_shipment)
router.get('/getQuantity_byid/:id', get_Quantity_by_carplate_for_shipment);
router.get('/get_table_for_client', auth.sign_client ,table_for_client);
router.put("/shipment_cost_rate/:id", Update_shipmen_discount_rate_cost);
router.get('/Logout', auth.sign_client ,(req , res , next)=>{ req.session.destroy();  res.send("logout")})

router.get('/auth', function(req, res, next) {
    req.session.customer = "Client";
    console.log(req.isAuthenticated());
    console.log(req.session);
    console.log("1");
     res.send("Signed in Client");
   });
   
   router.get('/Failure', function(req, res, next) {
     res.send("Error Signed in")
   });
  
  router.post('/login', passport.authenticate('local-client', {
    successRedirect: '/mangeclint/auth',
    failureRedirect: '/mangeclint/Failure',
    failureFlash: true,
  }))
module.exports = router;
