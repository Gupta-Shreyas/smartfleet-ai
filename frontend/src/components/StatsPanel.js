import CountUp from "react-countup";

export default function StatsPanel() {

return (

<div className="grid grid-cols-3 gap-4">

<div className="card text-center">
<h3>Active Vehicles</h3>
<CountUp end={24} duration={2} />
</div>

<div className="card text-center">
<h3>Active Deliveries</h3>
<CountUp end={12} duration={2} />
</div>

<div className="card text-center">
<h3>Fleet Efficiency</h3>
<CountUp end={87} duration={2} suffix="%" />
</div>

</div>

);

}
