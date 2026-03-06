import Sidebar from "../components/Sidebar";
import FleetMap from "../components/FleetMap";
import RequestVehicle from "../components/RequestVehicle";
import AlertsPanel from "../components/AlertsPanel";
import FleetAnalytics from "../components/FleetAnalytics";
import FleetEfficiency from "../components/FleetEfficiency";
import EmergencyMode from "../components/EmergencyMode";
import FleetIntelligence from "../components/FleetIntelligence";

export default function Dashboard() {

return (

<div className="flex">

<Sidebar />

<div className="p-6 grid grid-cols-2 gap-4 w-full">

<div className="col-span-2">
<FleetMap />
</div>

<AlertsPanel />

<RequestVehicle />

<FleetAnalytics />

<FleetEfficiency />

<EmergencyMode />

<FleetIntelligence />

</div>

</div>

);

}
