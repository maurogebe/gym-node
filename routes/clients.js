const express = require("express");
const { getClients, getOnlyClient, addClient } = require("../controllers/clients.js");

const router = express.Router();

router.get("/clients", getClients);
router.post("/client", addClient);
router.get("/client/:id", getOnlyClient)

module.exports = router;