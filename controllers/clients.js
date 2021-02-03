const { Clients } = require("../models");

const getClients = async(req, res) => {
    try {
        const results = await Clients
        res.json("Hola")
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
    addClient
}