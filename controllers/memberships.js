const { ClientBase } = require("pg");
const { Memberships } = require("../models");

const getMemberships = async(req, res) => {
    try {
        const results = await Memberships.findAll()
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const getOnlyMembership = async(req, res) => {
    try {
        const results = await Memberships.findOne({where: {id: req.params.id}});
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const addMembership = async(req, res) => {
    const data = req.body
    try {
        const results = await Memberships.create(data)
        res.json({message: "Membresia creada exitosamente"})
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getMemberships,
    getOnlyMembership,
    addMembership
}