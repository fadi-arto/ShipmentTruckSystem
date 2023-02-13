const async = require('hbs/lib/async');
const { model } = require('mongoose');
const plane = require('../../Entity/plan');
const center = require('../../Entity/centers');



//req.session.passport.user
const Addplan = async (data, id, Company_id, Location,City ,results) => {

    center.findById(id, (err, result) => {
        if (result) {
            plane.create({ CaR: data.CaR, start_time: data.start_time, source_location: Location, Company: Company_id  , Center: id , distination_City : data.distination_location , Status : "WAIT"}, (err, plan) => {
                if (err) {
                    results(err, null)
                }
                else {
                    results(null, plan)
                }
            })
        }
    })

}

module.exports = { Addplan };