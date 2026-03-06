const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({

  requestType: String,

  location: {
    latitude: Number,
    longitude: Number
  },

  passengers: Number,

  priority: {
    type: String,
    enum: ["Low","Medium","High","Emergency"]
  },

  assignedVehicle: String,

  status: {
    type: String,
    default: "Pending"
  }

});

module.exports = mongoose.model("Request", RequestSchema);