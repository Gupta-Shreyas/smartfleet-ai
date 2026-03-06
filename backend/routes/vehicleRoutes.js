const express = require("express");
const router = express.Router();

const {
  addVehicle,
  getVehicles
} = require("../controllers/vehicleController");

router.post("/vehicles", addVehicle);
router.get("/vehicles", getVehicles);

module.exports = router;