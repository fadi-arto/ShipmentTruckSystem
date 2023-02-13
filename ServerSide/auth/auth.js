const company = require('../Entity/company');
const client = require('../Entity/clients');



 function sign_Company(req, res, next) {
    if (req.isAuthenticated()) {       
        if(req.session.customer === "company"){
            next()
        }
    }
    else{
    res.status(203).send("not authenticated like company")
}
}

function Vehicle(req, res, next) {
    if (req.isAuthenticated()) {   
        console.log(req.isAuthenticated());    
        if(req.session.customer === "Vehicle"){
            next()
        }
        else{
            res.send("sory you are not Vehicle")
        }
    }
    else{
    res.send("not authenticated like Vehicle")
}
}


function sign_Center(req, res, next) {
    if (req.isAuthenticated()) {   
        console.log(req.isAuthenticated());    
        if(req.session.customer === "Center"){
            next()
        }
        else{
            res.send("sory you are not Center")
        }
    }
    else{
    res.send("not authenticated like Center")
}
}


function sign_client(req, res, next) {
    if (req.isAuthenticated()) {   
        if(req.session.customer === "Client"){
            next()
        }
    }
    else{
    res.send("not authenticated like Client")
}
}
  
function Client_isAuthenticated(req,res,next){
    if(!req.isAuthenticated())
      console.log("NOT_Authenticated");
      else{
        console.log(req.session);
      console.log("Authenticated");
      next()
      }
  }
  function isnotSignin(req ,res, next){
    if(req.isAuthenticated()){
        res.send("logout").status(200)
      return ;
    }
    next();
    }


module.exports = { sign_Company  ,Vehicle , sign_Center ,sign_client , Client_isAuthenticated,isnotSignin} ;