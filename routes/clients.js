const express = require("express");
const { getClients, addClient } = require("../controllers/clients.js");

const router = express.Router();

router.get("/clients", getClients);
router.post("/client", addClient);

module.exports = router;