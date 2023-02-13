const express = require('express');
const { creatcar ,deletecar,Updatecaree,findall , GetlocationVechile, Car_Company,fin_car_same_company,profile , FindCarByID}= require('../controller/car');

var router  = express.Router();
const passport = require('passport');
const auth = require('../auth/auth')

router.get('/getCredentials', (req, res) => {
console.log(req.session.passport.user);
res.send(req.session.passport.user);
})
router.get('/GetlocationVechile' , auth.Vehicle ,GetlocationVechile)
router.post('/create' ,creatcar );//done
router.delete('/deletcar/:id' , deletecar);//done
router.put('/updatecar/:id', Updatecaree); //-----
router.get('/findall', findall);//done
router.get('/get_profile', profile);
router.get('/Car_Company', Car_Company);//done
router.get('/find_car_same_company', fin_car_same_company);
router.get('/FindCarByID/:id', FindCarByID);
router.get('/logout',auth.isnotSignin,(req , res , next)=>{
  req.logOut()
  res.send("logout")
}
)
router.get('/Logout', auth.Vehicle ,(req , res , next)=>{ req.session.destroy();  res.send("logout")})

router.get('/auth', function(req, res, next) {
    req.session.customer = "Vehicle";
        console.log(req.isAuthenticated());
     res.send("Signed in Vehicle").status(200);
   });
   
   router.get('/Failure', function(req, res, next) {

    res.send("Error Signed in")
   });
  
  router.post('/login', passport.authenticate('local-managecar', {
    successRedirect: '/managecar/auth',
    failureRedirect: '/managecar/Failure',
    failureFlash: true,
  }))
 

  

module.exports = router;