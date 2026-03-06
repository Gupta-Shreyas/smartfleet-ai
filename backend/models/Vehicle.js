const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  vehicleId: String,

  type: {
    type: String,
    enum: ["Ambulance", "Truck", "Bus", "Police", "Van"]
  },

  capacity: Number,

  fuelLevel: {
    type: Number,
    default: 100
  },

  status: {
    type: String,
    enum: ["Available", "Busy", "Maintenance"],
    default: "Available"
  },

  location: {
    latitude: Number,
    longitude: Number
  },

  priorityLevel: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Vehicle", VehicleSchema);