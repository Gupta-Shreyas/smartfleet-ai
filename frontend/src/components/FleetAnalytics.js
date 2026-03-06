import {
Bar
} from "react-chartjs-2";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export default function FleetAnalytics() {

const data = {
labels: ["Ambulance", "Truck", "Bus", "Police"],

datasets: [
{
label: "Vehicle Usage",

data: [12, 8, 5, 6],

backgroundColor: [
"#22d3ee",
"#6366f1",
"#f59e0b",
"#ef4444"
]
}
]
};

return (

<div className="bg-slate-800 p-4 rounded-lg text-white">

<h2 className="text-lg mb-4">
Fleet Usage Analytics
</h2>

<Bar data={data} />

</div>

);

}
