const express = require("express");
const { getMemberships, getOnlyMembership, addMembership } = require("../controllers/memberships");

const router = express.Router();

router.get("/memberships", getMemberships);
router.get("/membership/:id", getOnlyMembership);
router.post("/membership", addMembership);

module.exports = router;