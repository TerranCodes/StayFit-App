const db = require('../models');
const Trainer = db.trainers;

exports.create = (req, res) => {
    if(!req.body.firstName) {
        res.status(400).send({message: "Cannot be empty"})
        return
    }
    const trainer = new Trainer({
        firstName: String,
        lastName: String, 
        userName: String,
        password: String,
        credentials: String,
    })
   trainer
    .save(trainer)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured creating trainer."
        })
    })
};

exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    var condition = firstName || lastName ? {firstName: {$regex: new RegExp(firstName, lastName), $options: 'i'}} : {};
    Trainer.find(condition)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured trying to retrieve trainers."
        })
    })
}