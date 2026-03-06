const express = require("express");
const router = express.Router();

const { createRequest } = require("../controllers/requestController");

router.post("/requestVehicle", createRequest);

module.exports = router;
