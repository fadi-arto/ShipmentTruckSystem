const notfication = require('../Entity/notfication');
const centers = require('../Entity/centers');
const clients = require("../Entity/clients");
const company = require('../Entity/company');

const { AddNotification } = require('../Models/Notifecation/add_notifecation');

const createNotification = async (req, res) => {
    const data = req.body.data;
    let id = req.session.passport.user
    let Sender;
    let company;
    console.log(req.session.customer);
    console.log(data);
    if (req.session.customer === "Center") {
        await centers.findById(id).then(resulter => {
            Sender = resulter.email
            company = resulter.Company
        })
    }
    else if (req.session.customer === "company") {
        await company.findById(id).then(companys => {
            Sender = companys.email
            company = companys.Company
        })
    }
    else if (req.session.customer === "Client") {
        await clients.findById(id).then(async resulter => {
            Sender = resulter.email
           const CentersClient  = await centers.findById(resulter.Centers)
           company = CentersClient.Company
        })
    }
    console.log(Sender);
    console.log(company);
    AddNotification(data, Sender, company, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            res.send("the message Sender")
        }
    })
}





const get_Notification = (req, res) => {
    let id = req.session.passport.user;
    centers.findById(id, (err, result) => {
        if (result) {
            notfication.find({ resiver : result.email }, (err, result_note) => {
                if (result_note) {
                    res.send(result_note.massage)
                }
                else {
                    console.log(err)
                }
            })
        }
    })
}


module.exports = { createNotification, get_Notification }