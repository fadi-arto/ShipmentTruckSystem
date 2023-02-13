const { addclient } = require('../Models/Client/addclient');
const { deletclientbyid } = require('../Models/Client/deleteclient')
const { UpdateclientById } = require('../Models/Client/updateclient');
const { AddShipments } = require('../Models/Client/AddShipments');
const clients = require("../Entity/clients");
const Shipment = require('../Entity/Shipment');
const centers = require('../Entity/centers');



const newclient = (req, res) => {
    const data = req.body
    const Client = req.session.passport.user
    addclient(data, Client,(err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}


const deleteclient = (req, res) => {
    const id = req.params.id;
    deletclientbyid(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }

    })

}




const Updateclient = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    UpdateclientById(data, id, (err, results, error) => {
        if (err) {
            res.send(error);
        } else {
            res.send(results);
        }
    });

}



const AddShipment = (req, res) => {
    const data = req.body;
    const center_id = req.session.passport.user
    centers.findById(center_id).then((center) => {
        AddShipments(data, center_id,  center.Location, center.City , (err, result) => {
            if (err) {
                res.send()
            }
            else {
                res.send("added successfully");
                        }
        })
    });
 
}

const Add_Shipment_Client = (req, res) => {
    const data = req.body;
    const center_id = req.session.passport.user
        AddShipments(data, center_id, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}






const show_complaint_byname = (req, res) => {
    try {

        let nameofcomlaint = req.body.Name;

        clients.findOne({ Name: nameofcomlaint }, function (err, results) {
            if (results) {
                res.send(results.complaint);
            }
            else {
                res.send("dont have ");
            }
        })


    }
    catch (err) {
        res.send("errore");
    }
};





const getallcomplaint = (req, res) => {

    clients.find({}, function (err, results) {
        if (results) {
            console.log(results.complaint)
            res.send(results.complaint);
        }
        else {
            res.send("dont have ");
        }
    })




};


const show_all_client = (req, res) => {
    clients.find({}, function (err, results) {
        if (results) {
            console.log("hereee")
            console.log(results)
            console.log("hereee")
            res.send(results);
        }
        else {
            res.send("dont have any clilent ");
        }
    })




};



const table_for_client = async (req, res) => {
    let id = req.session.passport.user;
    try {
    const result = await clients.findById(id);
    const result_shipment = await Shipment.find({EmailSource:result.email});
    var len = result_shipment.length;
    console.log(result_shipment);
    console.log(len);
    result_shipment.sort(function (a, b) {
    return a.DateStart - b.DateStart;
    });
    
    for (let index = 0; index < result_shipment.length; index++) {
        console.log("1");
            var ids = result_shipment[len].center;
            const result_serach = await centers.findById(ids);
            console.log(result_serach);
            // array.push(result_serach);
        
    }
  
} catch (err) {
    console.log(err);
}
}

const GetDetailsClient = async(req , res)=>{
    const id = req.session.passport.user
    console.log(id);
    const GetDetailsClients  = await clients.findById(id)
    res.send(GetDetailsClients)
}

const GetDetailsShipment = async (req, res) => {
    const id = req.params.id
    const result_shipment = await Shipment.findById(id);
    res.send(result_shipment)

}
const GetShipmentDirect = async(req, res) => {
    const id = req.params.id
    let arraySource = []
    let arrayDestination = []
    let array = []
    const result_shipment = await Shipment.findById(id);

    arraySource.push(result_shipment.City);
    arraySource.push(result_shipment.SourceLocation);
    let textSource = arraySource.join(",");
    array.push(textSource);
    arrayDestination.push(result_shipment.DistinationCity);
    arrayDestination.push(result_shipment.DistinationLocation);
    let textsDestination = arrayDestination.join(",");
    array.push(textsDestination);
    // console.log("result_shipment");
    // console.log(result_shipment);
    res.send(array);
}
const GetShipmentNotDone = async (req, res) => {
    const id = req.session.passport.user
    const ResultClient = await clients.findById(id)
    const result_shipment = await Shipment.find({EmailSource : ResultClient.email , state :{$ne: "Done"}})
    console.log(result_shipment);
    res.send(result_shipment)
}
const GetShipmentDetails = async (req, res) => {
    const key = req.params.key
    console.log(key);
    const result_shipment = await Shipment.find({ Key : key })
    console.log(result_shipment);
    res.send(result_shipment)
}
const GetShipmentDetailsMap = async (req, res) =>{
    console.log(req.body);
    let ArrayResult = []
    let ArrayDestination = []
    let ArraySource = []
    const id = req.body.Source
    const Source = await centers.findById(id)
    console.log(Source);
    ArraySource.push(Source.City);
    ArraySource.push(Source.Location);
    let textSource = ArraySource.join(",");
    ArrayResult.push(textSource)
    const Destination = await centers.find({ email : req.body.Destination})
    console.log(Destination);
    ArrayDestination.push(Destination[0].City);
    ArrayDestination.push(Destination[0].Location);
    let textDestination = ArrayDestination.join(",");
    ArrayResult.push(textDestination)
    res.send(ArrayResult)
}

const SendEmail = async (req, res) => {
    const data = req.body
    res.send("Sended to Company")
    console.log(data);
}

module.exports = {SendEmail , GetShipmentNotDone ,GetShipmentDetailsMap, GetShipmentDetails , GetShipmentDirect ,GetDetailsShipment,GetDetailsClient , newclient, deleteclient, Updateclient, AddShipment, show_complaint_byname, getallcomplaint, show_all_client, table_for_client };