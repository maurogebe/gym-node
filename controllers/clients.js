const { Clients } = require("../models");

const getClients = async(req, res) => {
    try {
        const results = await Clients.findAll()
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const getOnlyClient = async(req, res) => {
    try {
        const results = await Clients.findOne({where: {id: req.params.id}})
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const addClient = async(req, res) => {
    const data = req.body;
    try {
        const results = await Clients.create(data);
        res.json({ message: "Cliente creado exitosamente" })
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getClients,
    getOnlyClient,
    addClient
}