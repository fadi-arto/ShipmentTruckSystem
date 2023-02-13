const { model } = require('mongoose')
const car = require('../../Entity/cars')



const UpdatecarById = (data, id, result) => {
    car.findByIdAndUpdate(id,
        { Location: data.Location },
        { new: true },
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                console.log(results);
                result(null, results);
            }
        })

}
module.exports = { UpdatecarById };


