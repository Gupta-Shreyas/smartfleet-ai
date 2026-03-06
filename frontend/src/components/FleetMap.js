import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useState, useEffect } from "react";
import socket from "../socket";
import "leaflet/dist/leaflet.css";
import { icons } from "./vehicleIcons";

const FleetMap = () => {

const [route, setRoute] = useState([]);

const [vehicles, setVehicles] = useState([
{
id: "AMB101",
type: "Ambulance",
lat: 13.0827,
lng: 80.2707
},
{
id: "TRK201",
type: "Truck",
lat: 13.0674,
lng: 80.2376
}
]);

// Vehicle movement animation
useEffect(() => {

```
const interval = setInterval(() => {

  setVehicles(prev =>
    prev.map(v => ({
      ...v,
      lat: v.lat + (Math.random() - 0.5) * 0.001,
      lng: v.lng + (Math.random() - 0.5) * 0.001
    }))
  );

}, 2000);

return () => clearInterval(interval);
```

}, []);

// Listen for vehicle assignment event
useEffect(() => {

```
socket.on("vehicleAssigned", (data) => {

  const vehicleLocation = [
    data.vehicle.location.latitude,
    data.vehicle.location.longitude
  ];

  const destination = [
    data.request.location.latitude,
    data.request.location.longitude
  ];

  setRoute([vehicleLocation, destination]);

});

return () => {
  socket.off("vehicleAssigned");
};
```

}, []);

return (

```
<MapContainer
  center={[13.0827, 80.2707]}
  zoom={12}
  style={{ height: "500px", width: "100%" }}
>

  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {vehicles.map((vehicle) => (
    <Marker
      key={vehicle.id}
      position={[vehicle.lat, vehicle.lng]}
      icon={icons[vehicle.type]}
    >
      <Popup>
        Vehicle: {vehicle.id}
      </Popup>
    </Marker>
  ))}

  {route.length > 0 && (
    <Polyline
      positions={route}
      pathOptions={{ color: "cyan", weight: 4 }}
    />
  )}

</MapContainer>
```

);

};

export default FleetMap;
