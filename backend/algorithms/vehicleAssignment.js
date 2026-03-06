const Vehicle = require("../models/Vehicle");
const calculateDistance = require("./distance");

async function assignVehicle(request) {

  const vehicles = await Vehicle.find({ status: "Available" });

  if (vehicles.length === 0) {
    return { message: "No vehicles available" };
  }

  let bestVehicle = null;
  let shortestDistance = Infinity;

  vehicles.forEach(vehicle => {

    const distance = calculateDistance(
      request.location.latitude,
      request.location.longitude,
      vehicle.location.latitude,
      vehicle.location.longitude
    );

    if (distance < shortestDistance && vehicle.fuelLevel > 20) {
      shortestDistance = distance;
      bestVehicle = vehicle;
    }

  });

  return {
    vehicle: bestVehicle,
    distance: shortestDistance,
    reason: "Closest vehicle with sufficient fuel"
  };
}

module.exports = assignVehicle;