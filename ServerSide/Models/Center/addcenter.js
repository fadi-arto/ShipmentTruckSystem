
const center = require('../../Entity/centers');
const company = require('../../Entity/company');


//add data to mongoose

const addcenter = async (data, comany_id, result) => {
    console.log(data.email);
    center.find({ email: data.email }, (err, centers) => {
        console.log(centers);
        if (centers.length != 0) {
            console.log("1");
            result("the email aleady exist", null)
        }
        else {
            console.log("2");
            company.findById(comany_id, (err, companyes) => {
                if (companyes) {
                    center.create({ Company: companyes.name, Location: data.Location, branch: centers.length + 1, email: data.email, City: data.City, Image: companyes.Image }, (err, results) => {
                        if (err) {
                            console.log(err)
                            result(err, null)
                        }
                        else {
                            result(null, "Succucfully")
                        }

                    })
                }
            });

        }
    })

}

module.exports = { addcenter };