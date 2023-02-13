const async = require('hbs/lib/async');
const { model } = require('mongoose');
const car = require('../../Entity/cars');
const company = require('../../Entity/company')

//add data to mongoose

const addcar = async (data, company_id, result) => {
          const nameCompany = await company.findById(company_id)
            car.create({ company: nameCompany.name , Car_plate: data.Car_plate, Email: data.Email, Quantity: data.Quantity, Type: data.Type, Status: "WAIT" }, (err, result_add) => {
                if (err) {
                    console.log(err)
                    result(err, null)
                }
                else {

                    result(null, result_add)
                }


            })
        }



















module.exports = { addcar };