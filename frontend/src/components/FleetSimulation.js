import { useEffect } from "react";
import socket from "../socket";

export default function FleetSimulation() {

useEffect(() => {

const interval = setInterval(() => {

const request = {

requestType: "Transport",

location: {
latitude: 13.08 + Math.random() * 0.02,
longitude: 80.27 + Math.random() * 0.02
},

passengers: Math.floor(Math.random()*5)+1,
priority: "Medium"

};

socket.emit("simulateRequest", request);

}, 8000);

return () => clearInterval(interval);

}, []);

return null;

}
