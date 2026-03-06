const Vehicle = require("../models/Vehicle");

exports.activateEmergency = async (req, res) => {

const io = req.app.get("io");

const vehicles = await Vehicle.find({ type: "Ambulance" });

if (vehicles.length > 0) {

const vehicle = vehicles[0];

io.emit("alert", "🚨 Emergency Mode Activated");

io.emit("vehicleAssigned", {
vehicle: vehicle,
request: {
location: {
latitude: vehicle.location.latitude + 0.01,
longitude: vehicle.location.longitude + 0.01
}
}
});

}

res.json({ message: "Emergency mode activated" });

};
