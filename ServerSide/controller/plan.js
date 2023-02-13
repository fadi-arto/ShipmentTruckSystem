const { request } = require('express');
const { Addplan } = require('../Models/plan/add_plan');
const { model } = require('mongoose');
const plan = require('../Entity/plan');
const shipment = require('../Entity/Shipment');
const company = require('../Entity/company');
const center = require('../Entity/centers');
const axios = require("axios");
const plane = require('../Entity/plan');

const createplan = (req, res) => {
    const data = req.body;
    const id = req.session.passport.user
    center.findById(id).then((center) => {
        Addplan(data, id, center.Company, center.Location, center.City, (err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            }
            else {
                res.send(result)
            }
        })
    });

}

const update_source_distination = (req, res) => {
    const id = req.params.id;
    shipment.findById(id, (err, result) => {
        if (result) {
            plan.findOneAndUpdate({}, (err, result_plan) => {
                result.SourceLocation

            })

        }

    })

}

// const find_all_plan_center = (req, res) => {
//     let id = "63ab0aaadf886247b01f0234";

//     plan.find({}, (err, result_plan) => {
//       if (err) {

//         console.log(err);
//       }
//       else {
//         company.findById( id , (err, result_company) =>{
//           if(err){
//             console.log(err);
//           }
//           else{
//             center.find({Company:result_company.name}, (err, result_center) => {
//               for (let index = 0; index < result_center.length; index++) {
//                 if (result_center[index].id == result_plan.company) {
//                   res.send(result_plan);
//                 } 
//               }

//               // else {
//               //   res.send("dont have shippment on this center")
//               // }
//             })
//           }
//         })
//       }
//     })

//   }


// const find_all_plan_center = (req, res) => {
//     let id = req.session.passport.user;
//     plan.find({},(err,result)=>{
// if(err){
//     console.log(err)
// }
// else{
//     center.findById(id , (err,result_center)=>{

//     if(result_center.company==result.company){
// res.send(result)

//     }
//     else{
//         res.send(err)
//     }

//     })

//     }

//     })


// }


const find_all_plan_center = (req, res) => {
    let id = req.session.passport.user;

    plan.find({ Center: id }, (err, result) => {
        if (result) {
            res.send(result)
        }
        else {
            console.log(err)
        }

    })

}


const find_plan_company = (req, res) => {
    let id = req.session.passport.user;
    company.findById(id, (err, result_company) => {
        if (err) {

            console.log(err)
        }
        else {
            plan.find({ company: result_company.name }, (err, result) => {
                if (result) {
                    // console.log(result)
                    res.send(result)
                }
                else {
                    console.log(err)
                }
            })
        }
    })
}

async function getLatLng(address) {
    console.log(address);
    const response = await axios.get(`https://nominatim.openstreetmap.org/search/${encodeURIComponent(address)}?format=json`);
    const lat = response.data[0].lat;
    const lng = response.data[0].lon;
    return { lat, lng };
}
let distace = []
function calculate_distance(lat1, lon1, lat2, lon2, name) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    distace.push({ distance: d, Name: name })
}

const add_shipment_to_plane = async (req, res) => {
    let Shipments = req.body.Shipments;
    let Plan = req.body.Plan;
    try {
        let shipmentResult = await shipment.findById(Shipments);
        let Center_location = [];
        let Center_location_latlng = [];
        await center.find({ City: shipmentResult.DistinationCity }).then(result => {
            for (let index = 0; index < result.length; index++) {
                let array = [];
                array.push(result[index].City);
                  array.push(result[index].Location);
                let text = array.join(",");
                Center_location.push({ address: text, Name: result[index].email });
            }
        })
        console.log(Center_location);
        for (let i = 0; i < Center_location.length; i++) {
            let array2 = [];
            array2.push(shipmentResult.DistinationCity);
            array2.push(shipmentResult.DistinationLocation);
            let text2 = array2.join(",");
            let latlng = await getLatLng(text2);
            let latlng2 = await getLatLng(Center_location[i].address);
            calculate_distance(latlng.lat, latlng.lng, latlng2.lat, latlng2.lng, Center_location[i].Name);
            Center_location_latlng.push(latlng2);
        }
        console.log(Center_location_latlng);
        const minDistance = distace.reduce((min, curr) => curr.distance < min.distance ? curr : min, distace[0]);
        let checklocation = await plan.findById(Plan)
        console.log(checklocation.distination_location);
        console.log(minDistance);
        const test = await checklocation.distination_location.includes(minDistance.Name)
        console.log(test);
        if (test) {
            console.log("1");
            let planResult = await plan.findByIdAndUpdate(
                Plan,
                { $push: { "shippment": Shipments } },
                { safe: true, upsert: true }
            )
        }
        else {
            console.log(minDistance.Name);
            let planResult = await plan.findByIdAndUpdate(
                Plan,
                { $push: { "distination_location": minDistance.Name, "shippment": Shipments } },
                { safe: true, upsert: true }
            )

        }
        let planlocation = await plan.findById(Plan)
        let shipmentUpdate = await shipment.findByIdAndUpdate(
            Shipments,
            { state: "Deliver", Location: "Center", "Car_plate": planlocation.CaR, "DistinationCenters": minDistance.Name },
            { safe: true, upsert: true }
        )
        let shipmentUpdateLocation = await shipment.findById()
        res.send("OK")

    } catch (error) {
        console.error(error);
    }

    // try {
    //     let result_shipment = await shipment.findById('Homs,الغاصبية');
    //     if (result_shipment) {
    //         const c = result_shipment.Car_plate;
    //         const s = result_shipment.SourceLocation;
    //         const d = result_shipment.DistinationLocation;

    //         let planResult = await plan.findByIdAndUpdate(
    //             Plan,
    //             { $push: { "source_location": s, "distination_location": d, "CaR": c } },
    //             { safe: true, upsert: true }
    //         );

    //         console.log("good");
    //     }
    // } catch (error) {
    //     console.error(error);
    // }
};




module.exports = { createplan, find_all_plan_center, find_plan_company, add_shipment_to_plane };