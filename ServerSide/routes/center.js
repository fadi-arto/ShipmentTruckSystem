const express = require('express');
const auth = require('../auth/auth')
const { UpdateShipmentStatus , GetCarsNearly, SendEmail ,UpdatePlanStatus, creatcenter, GetShipmentPlan ,deletcenter,FindShipmentDone, GetWaitShipmentDone,Updatecenter, findAllCenters,GetDetailsSales ,GetPlanTransport , fin_cnnter_same_company, find_centers_shipment, GET_IMAGE, GetPlanDirection , GetPlanStart } = require('../controller/center');
const { fin_shipment_same_center, get_shippment_done_and_wait, Find_shipment_city } = require('../controller/Shipment');
const { AddShipment } = require('../controller/client');
const { createplan, find_all_plan_center, find_plan_company, add_shipment_to_plane } = require('../controller/plan')
const { createNotification, get_Notification } = require('../controller/Notification')
const passport = require('passport');


var router = express.Router();

router.get('/GET_IMAGE',auth.sign_Center, GET_IMAGE)
router.get('/GetPlanDirection', auth.sign_Center ,GetPlanDirection)
router.post('/Find_shipment_city', Find_shipment_city);
router.post('/add_shipment_to_plan', add_shipment_to_plane);
router.post('/create', creatcenter);
router.post('/createplan', createplan);
router.get('/GetPlanStart' ,auth.sign_Center, GetPlanStart)
router.post('/GetPlanTransport', auth.sign_Center, GetPlanTransport )
router.get('/GetDetailsSales' ,auth.sign_Center, GetDetailsSales)
router.get('/FindShipmentDone', FindShipmentDone)
router.get('/GetWaitShipmentDone' , GetWaitShipmentDone)
router.get('/GetShipmentPlan/:id', GetShipmentPlan);
router.get('/UpdateShipmentStatus/:id', UpdateShipmentStatus)
router.get('/Authorization',auth.sign_Center)
router.post('/SendEmail' , SendEmail)
router.get('/GetCarsNearly', GetCarsNearly)
router.get('/Logout', auth.sign_Center ,(req , res , next)=>{ req.session.destroy();  res.send("logout")})

router.post('/addNotfication', createNotification); // done 
router.get('/get_Email_center', get_Notification)
router.delete('/deletcenter/:id', deletcenter);
// router.put('/updatecenter/:id', Updatecenter);
router.post('/Add_shipment', AddShipment);
router.get('/findAllcenters', findAllCenters);
router.get('/find_shippment_wait_done', get_shippment_done_and_wait);
router.get('/find_shipment_center', fin_shipment_same_center);
router.get('/find_centers', fin_cnnter_same_company);
router.get('/find_centers_shipment', find_centers_shipment);
router.get('/find_plan_company', find_plan_company);
router.get('/find_plan_center', find_all_plan_center);
router.put('/UpdatePlanStatus/:id', UpdatePlanStatus)
router.get('/auth', function (req, res, next) {
  req.session.customer = "Center";
  console.log(req.isAuthenticated());
  console.log(req.session);
  console.log("1");
  res.send("Signed in Center");
});

router.get('/Failure', function (req, res, next) {
  res.send("Error Signed in")
});

router.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/mangecenter/auth',
  failureRedirect: '/mangecenter/Failure',
  failureFlash: true,
}))



module.exports = router;