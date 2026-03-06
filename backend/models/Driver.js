const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: String,
  phone: String,
  assignedVehicle: String,
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model("Driver", DriverSchema);