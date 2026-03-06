import L from "leaflet";

import ambulanceIcon from "../icons/ambulance.png";
import truckIcon from "../icons/truck.png";
import busIcon from "../icons/bus.png";
import policeIcon from "../icons/police.png";

export const icons = {

Ambulance: new L.Icon({
iconUrl: ambulanceIcon,
iconSize: [40, 40]
}),

Truck: new L.Icon({
iconUrl: truckIcon,
iconSize: [40, 40]
}),

Bus: new L.Icon({
iconUrl: busIcon,
iconSize: [40, 40]
}),

Police: new L.Icon({
iconUrl: policeIcon,
iconSize: [40, 40]
})

};
