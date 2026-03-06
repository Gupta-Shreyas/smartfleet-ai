const Vehicle = require("../models/Vehicle");
const Request = require("../models/Request");

exports.createRequest = async (req, res) => {
try {
const { requestType, location, passengers, priority } = req.body;

```
if (!location || location.latitude == null || location.longitude == null) {
  return res.status(400).json({ error: "Invalid location data" });
}

const vehicles = await Vehicle.find({ status: "Available" });

if (!vehicles || vehicles.length === 0) {
  return res.json({ message: "No vehicles available" });
}

let bestVehicle = vehicles[0];
let shortestDistance = Infinity;

vehicles.forEach(vehicle => {
  if (!vehicle.location) return;

  const distance = Math.sqrt(
    Math.pow(vehicle.location.latitude - location.latitude, 2) +
    Math.pow(vehicle.location.longitude - location.longitude, 2)
  );

  if (distance < shortestDistance && vehicle.fuelLevel > 20) {
    shortestDistance = distance;
    bestVehicle = vehicle;
  }
});

const request = new Request({
  requestType,
  location,
  passengers,
  priority,
  assignedVehicle: bestVehicle.vehicleId
});

await request.save();

const io = req.app.get("io");

if (io) {
  io.emit("vehicleAssigned", {
    vehicle: bestVehicle,
    request: request
  });
}

res.json({
  message: "Vehicle assigned",
  vehicle: bestVehicle
});
```

} catch (error) {
console.error(error);
res.status(500).json({ error: error.message });
}
};
