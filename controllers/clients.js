const { Clients, Payments, Memberships } = require("../models");

const getClients = async(req, res) => {
    try {
        const results = await Clients.findAll({
            include: {
                model: Payments,
                attributes: [['id', 'payment_id']],
                include: {
                    model: Memberships,
                    attributes: ['name', 'duration']
                }
            }
        })
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const getOnlyClient = async(req, res) => {
    try {
        const results = await Clients.findOne({
            include: {
                model: Payments,
                attributes: [['id', 'payment_id']],
                include: {
                    model: Memberships,
                    attributes: ['name', 'duration']
                },
                where: {
                    id: req.params.id
                }
            }
        })
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