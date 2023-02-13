const { addcar } = require('../Models/Car/addcar');
const { deletecarById } = require('../Models/Car/deletcar')
const { UpdatecarById } = require('../Models/Car/updatecar');
const { Updatecar_platById } = require('../Models/Car/updatecar_plate');
const { Update_state_car_ById } = require('../Models/Car/updatestatus_car')
const cars = require('../Entity/cars');
const { request } = require('express');
const company = require('../Entity/company');

const center = require('../Entity/centers');

//give the data from front end to models after that push to mongoose

const creatcar = (req, res) => {
    const data = req.body;
    console.log(req.isAuthenticated());
    addcar(data, req.session.passport.user, (err, car) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send(car)
        }
    })
}







const deletecar = (req, res) => {
    const id = req.params.id;
    deletecarById(id, (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(results)
        }
    })

}

const Updatecaree = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    UpdatecarById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });

}


const updatecar_plate = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data);
    Updatecar_platById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });

}




const update_state_car = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data);
    Update_state_car_ById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });

}


const findall = (req, res) => {
    try {
        const id = req.session.passport.user
        let arr = []
        cars.find(function (err, results) {
            if (results) {
                center.findById(id, (err, results_center) => {
                    for (let index = 0; index < results.length; index++) {
                        if (results[index].company === results_center.Company) {
                            arr.push(results[index].Location)
                        }
                    }
                    console.log(arr);
                })
            }
            else {
                res.send("not found Car in company")
            }
        })
    }
    catch (err) {
        res.send("errore");

    }
}
const Car_Company =async (req, res) => {
    try {
        const id = req.session.passport.user
        const companyname = await company.findById(id)
        cars.find({ company: companyname.name }, function (err, results) {
            if (err) {
                console.log(err);
            }

            res.send(results)
        })
    }
    catch (err) {
        res.send("errore");

    }
}

const find_car_by_plate = async (req, res) => {
    try {
        let Car_plates = req.params.id;
        console.log(Car_plates);
 const CarPlate = await cars.findOne({Car_plate : Car_plates})
 console.log(CarPlate);
 res.send(CarPlate.Location)
    }
    catch (err) {
        res.send("errore");
    }
};


const fin_car_same_company = (req, res) => {
    let id = req.session.passport.user;
    cars.find({}, (err, result_car) => {
        if (err) {
            console.log(err);
        }
        else {
            company.findById(id, (err, result_comany) => {
                if (result_comany.name == result_car.name) {

                    res.send(result_car);
                }
                else {

                    res.send("dont have car here")
                }


            })

        }

    })

}



const profile = (req, res) => {
    let id = req.session.passport.user;
    cars.findById(id, (err, car) => {
        if (car) {
            cars.find({ Car_plate: car.Car_plate }, (err, result_car) => {
                if (result_car) {
                    res.send(result_car).status(200)

                }
                else {
                    console.log(err);

                }


            })
        }
    })


}


const FindCarByID = (req, res) => {
    let id = req.params.id
    cars.findById(id).then((data) => {
        console.log("on");
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}


const GetlocationVechile = async (req, res) => {
    const id = req.session.passport.user
    const Carsloction = await cars.findById(id)
    if(Carsloction){
        res.send(Carsloction)
    }
}


module.exports = {GetlocationVechile , creatcar, deletecar, Updatecaree, updatecar_plate, FindCarByID, update_state_car, find_car_by_plate, findall, Car_Company, fin_car_same_company, profile };



