const { Payments, Clients, Memberships } = require("../models");

const getPayments = async(req, res) => {
    try {
        const results = await Payments.findAll({
            include: [
                {
                    model: Clients,
                    attributes: ['first_name', 'last_name']
                },
                {
                    model: Memberships,
                    attributes: ['name']
                }
            ]
        })
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const getOnlyPayment = async(req, res) => {
    try {
        const results = await Payments.findOne({
            include: [
                {
                    model: Clients
                },
                {
                    model: Memberships
                }
            ],
            where: {
                client_id: req.params.id
            }
        });
        res.json(results)
    } catch(err) {
        console.log(err)
    }
}

const addPayment = async(req, res) => {
    const data = req.body
    data.date = new Date()
    try {
        const results = await Payments.create(data)
        res.json({message: "Pago realizado exitosamente"})
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getPayments,
    getOnlyPayment,
    addPayment
}