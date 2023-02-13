const { addcenter } = require('../Models/Center/addcenter');
const center = require('../Entity/centers');
const { deletecenterById } = require('../Models/Center/deletcenter');
const { UpdatecenterById } = require('../Models/Center/updatecenter');
const { request } = require('express');
const company = require('../Entity/company');
const Shipment = require('../Entity/Shipment');
const plane = require('../Entity/plan');
const shipment = require('../Entity/Shipment');
const cars = require('../Entity/cars')
const async = require('hbs/lib/async');
const axios =require('axios')
//give the data from front end to models after that push to mongoose

const creatcenter = (req, res) => {
    const data = req.body;
    console.log(req.isAuthenticated());
    addcenter(data, req.session.passport.user, (err, car) => {//ID PRESON WHO LOGIN 
        if (err) {
            console.log("1!");
            res.send(err)
        }
        else {
            console.log("2!");
            res.send(car)
        }
    })
}


const deletcenter = (req, res) => {
    const id = req.params.id;
    deletecenterById(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }

    })

}



const Updatecenter = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    UpdatecenterById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });

}

const findAllCenters = (req, res) => {
    try {
        center.find(function (err, results) {
            res.send(results)
        })
    }
    catch (err) {
        res.send("errore");

    }
}




const fin_cnnter_same_company = async  (req, res) => {
    try {
        const id = req.session.passport.user
        const arr = [];
        const Centers = await center.findById(id)
        console.log(Centers);
        const CenterCompany = await center.find({Company : Centers.Company})
        console.log(CenterCompany);
        if(CenterCompany){
            res.send(CenterCompany)
        }
     
    } catch (error) {
        console.log(err);
    }

}

const find_centers_shipment = (req, res) => {
    try {
        const center_id = req.session.passport.user
        Shipment.find({ center: center_id }).then(result_shipment => {
            res.send(result_shipment)
        })


    }
    catch (err) {
        console.log(err);
    }
}

const GET_IMAGE = async (req, res) => {
    try {
        const Center_id = req.session.passport.user
        center.findById(Center_id).then(centers => {
            res.send(centers)
        })
    } catch (error) {

    }
}
const GetPlanDirection = (req, res) => {
    const Center_id = req.session.passport.user
    let array = [];
    center.findById(Center_id).then(result => {
        plane.find({ Company: result.Company }).then(async Plans => {
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            for (let i = 0; i < Plans.length; i++) {
                const dates2 = Plans[i].start_time[0]
                var date2 = new Date(dates2);
                date2.setHours(0);
                var date1 = new Date(date);

                if (date1.getTime() < date2.getTime()) {
                } else if (date1.getTime() >= date2.getTime()) {
                    for (let j = 0; j < Plans[i].shippment.length; j++) {
                        if (Plans[i].shippment[j].state === "WAIT") {
                            let shipmentUpdate = await shipment.findByIdAndUpdate(
                                Plans[i].shippment[j],
                                { state: "Start" },
                                { safe: true, upsert: true }
                            )
                        }

                    }
                    if (Plans[i].Status === "WAIT") {
                        let planeUpdate = await plane.findByIdAndUpdate(
                            Plans[i].id,
                            { Status: "Start" },
                            { safe: true, upsert: true }
                        )
                        const findCarid = await cars.find({Car_plate :Plans[i].CaR })
                        let carsupdate = await cars.findByIdAndUpdate(
                            findCarid.id,
                            { Status: "Start" },
                            { safe: true, upsert: true }
                        )
                    }

                }
            }
        })
    })
}

const GetPlanStart = (req, res) => {
    const id = req.session.passport.user
    plane.find({ Center: id, Status: "Start" }).then((Plans) => {
        res.send(Plans)
    }).catch((err) => res.send(err))
}
const GetPlanTransport = async (req, res) => {
    let source_location = [];
    let source;
    if (req.body.Centers.length > 0) {
        const serach = await center.findById(req.body.Centers[0].Center).then(Centers => {
            source_location.push(Centers.City);
            source_location.push(Centers.Location);
            let text = source_location.join(",");
            source = text
        })
        let destination_location = []
        let total_Destination = []
        let tot_location = []
        for (let i = 0; i < req.body.Centers.length; i++) {
            for (let j = 0; j < req.body.Centers[i].distination_location.length; j++) {
                await center.find({ email: req.body.Centers[i].distination_location[j] }).then(result => {
                    let arr = []
                    arr.push(result[0].City);
                    arr.push(result[0].Location);
                    let textss = arr.join(",");
                    tot_location.push(textss)
                    
                    textss = []
                })
            }
            total_Destination.push(tot_location)
            tot_location = []
        }
        total_Destination.push(source)
        res.send(total_Destination)
    }
}

const GetDetailsSales = async (req, res) => {
    let data_req = {
        Year: '2023'
    }

    let Mounths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const centerid = req.session.passport.user

    await Shipment.find({ center: centerid }).then(result_data => {
        if (result_data) {
            for (let index = 0; index < result_data.length; index++) {
                const date = result_data[index].createdAt.toString()
                let array = date.split(" ");

                if (array[3] === data_req.Year) {
                    if (array[1] === 'Jan') {
                        Mounths[0] = Mounths[0] + 1;
                    } else if (array[1] === 'Feb') {
                        Mounths[1] = Mounths[1] + 1;
                    } else if (array[1] === 'Mar') {
                        Mounths[2] = Mounths[2] + 1;
                    } else if (array[1] === 'Apr') {
                        Mounths[3] = Mounths[3] + 1;
                    } else if (array[1] === 'May') {
                        Mounths[4] = Mounths[4] + 1;
                    } else if (array[1] === 'Jun') {
                        Mounths[5] = Mounths[5] + 1;
                    } else if (array[1] === 'Jul') {
                        Mounths[6] = Mounths[6] + 1;
                    } else if (array[1] === 'Aug') {
                        Mounths[7] = Mounths[7] + 1;
                    } else if (array[1] === 'Sep') {
                        Mounths[8] = Mounths[8] + 1;
                    } else if (array[1] === 'Oct') {
                        Mounths[9] = Mounths[9] + 1;
                    } else if (array[1] === 'Nov') {
                        Mounths[10] = Mounths[10] + 1;
                    } else if (array[1] === 'Dec') {
                        Mounths[11] = Mounths[11] + 1;
                    }
                    else {

                    }
                }
            }

            res.send(Mounths);
        }
    })
}
const FindShipmentDone = (req, res) => {
    const id = req.session.passport.user
    plane.find({ Center: id, Status: "Done" }).then((Plans) => {
        res.send(Plans)
    }).catch((err) => res.send(err))
}
const GetWaitShipmentDone = async (req, res) => {
    const id = req.session.passport.user
    let array = []
    await center.findById(id).then(async (Centers) => {
        await plane.find({ Company: Centers.Company, Status: "Start" }).then((Plans) => {
            console.log(Plans);
            for (let i = 0; i < Plans.length; i++) {
                let planes = Plans[i].distination_location.includes(Centers.email)

                if (planes) {
                    array.push(Plans[i])

                }
                else {

                }
            }
            console.log(array);
            res.send(array)
        })
    }).catch((err) => res.send(err))
}
const GetShipmentPlan = async (req, res) => {
    const id = req.params.id
    let array = []
    await plane.findById(id).then(async result => {
        for (let i = 0; i < result.shippment.length; i++) {
            await Shipment.findById(result.shippment[i]).then(resultShipment => {
                if (resultShipment.state === "Start") {
                    array.push(resultShipment)
                    console.log(resultShipment);
                }

            })

        }
        res.send(array)
    })
}
const UpdateShipmentStatus = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const result = await shipment.findByIdAndUpdate(
            id,
            { state: "Done" },
            { safe: true, upsert: true, new: true }
        )

    } catch (error) {
        res.send('failure')
    }

}
const SendEmail = (req, res) => {
    console.log(req.body);
}
const UpdatePlanStatus = async (req, res) => {
    const id = req.params.id

    await plane.findById(id).then(async resultPlan => {
        const result = await plane.findByIdAndUpdate(
            id,
            { Status: "Done" },
            { safe: true, upsert: true }
        )
        for (let i = 0; i < resultPlan.shippment.length; i++) {
            await shipment.findById(resultPlan.shippment[i]).then(async resultShipment => {
                const result = await shipment.findByIdAndUpdate(
                    resultPlan.shippment[i],
                    { state: "Done" },
                    { safe: true, upsert: true, new: true }
                )
            })
        }
    })
}
const GetCarsNearly = async (req, res) => {
    console.log("!");
    const id = req.session.passport.user
    console.log(id);
    const centers = await center.findById(id)
    console.log(centers);
    const City = centers.City
    let text = City
    const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ar&tl=en&dt=t&q=${encodeURI(text)}`);
    console.log(response.data[0][0][0]);
    const CityEnglish = response.data[0][0][0] 
    let text2 = City
    const response2 = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURI(text2)}`);
    console.log(response2.data[0][0][0]);
    const CityEnglish2= response2.data[0][0][0] 
    let array = [];
    const Cars = await cars.find({ company: centers.Company, Status: "WAIT" })
    console.log(Cars);
    for (let i = 0; i < Cars.length; i++) {

        var lat = Cars[i].Location.lat;
        var lng = Cars[i].Location.lng;
        console.log(lat);
        var url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng;
      await axios.get(url)
            .then(function (response) {
                var address = response.data.address;
                console.log(City);
                console.log(address);
                if(address.state.split(' ')[1] == City || address.state.split(' ')[1] == CityEnglish || address.state.split(' ')[1] == CityEnglish2){
                    console.log("111");
                    array.push(Cars[i].Car_plate)
                }
                else{
                    console.log("222");
                }

            })
          
            .catch(function (error) {
                console.log(error);
            });
    }
    res.send(array)
}

module.exports = { GetCarsNearly, SendEmail, UpdatePlanStatus, UpdateShipmentStatus, GetShipmentPlan, GetDetailsSales, GetWaitShipmentDone, FindShipmentDone, GetPlanTransport, GetPlanDirection, creatcenter, GET_IMAGE, deletcenter, Updatecenter, GetPlanStart, findAllCenters, fin_cnnter_same_company, find_centers_shipment };