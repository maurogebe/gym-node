const express = require("express");
const { getPayments, getOnlyPayment, addPayment } = require("../controllers/payments");

const router = express.Router();

router.get("/payments", getPayments);
router.get("/payment/:id", getOnlyPayment);
router.post("/payment", addPayment);

module.exports = router;