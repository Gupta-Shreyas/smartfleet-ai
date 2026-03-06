const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  pickup: String,
  drop: String,
  weight: Number,
  priority: String,
  deadline: String,
  assignedVehicle: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Delivery", DeliverySchema);