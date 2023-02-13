const company = require('../Entity/company');
const { addcompany } = require('../Models/company/addcompany');
const { deletecompanybyid } =require('../Models/company/deletecompany');
const { UpdatecompanyById } = require('../Models/company/update');

const Shipment = require('../Entity/Shipment');
const centers = require('../Entity/centers');

const plane = require('../Entity/plan');

const createcompany = (req,res) => {
    const data = req.body;
    addcompany(data,(err, result) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else{
            res.send(result) 
        }
    })
}


const deletecompany = (req,res)=>{
    const id = req.params.id;
    deletecompanybyid(id, (err,result)=>{
   if(err){
       res.send(err);
   }
   else{
       res.send(result);
   }
   
   })    
   
   }


   const Updatecompany = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    UpdatecompanyById(data ,id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.send(results);
        }
    });

}


   
const GET_IMAGE = async (req, res) =>{
    try {
        const Company_id = req.session.passport.user
        company.findById(Company_id).then(Companys => {
            res.send(Companys)
        })
    } catch (error) {
        
    }
}



const ShipmentsCompany = async (req , res) => {
    const id = req.session.passport.user
    let Shipments = []
    const CompanyName = await company.findById(id)
    const ShipmentsCenters = await centers.find({Company: CompanyName.name})
    for (let i = 0; i < ShipmentsCenters.length; i++) {
        await  Shipment.find({center:ShipmentsCenters[i].id ,state :'WAIT'}).then(result => {
            if(result.length > 0) {
                Shipments.push(result)
            }
        })

        
    }
    console.log(Shipments);
    res.send(Shipments)
}

const PlanCompany =async (req, res) => {
    const id = req.session.passport.user
    const CompanyName = await company.findById(id)
    const Plans = await plane.find({Company:CompanyName.name})
    res.send(Plans)
    
}
module.exports = {PlanCompany, ShipmentsCompany ,createcompany , GET_IMAGE  , deletecompany , Updatecompany} ; 