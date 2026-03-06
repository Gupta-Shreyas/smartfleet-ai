export default function FleetEfficiency() {

const score = 87;

return (

<div className="bg-slate-800 p-4 rounded-lg text-white">

<h2 className="text-lg mb-4">
Fleet Efficiency Score
</h2>

<div className="text-4xl font-bold text-cyan-400">
{score}%
</div>

<p className="mt-2 text-sm text-gray-300">
Recommendation: Reduce idle trucks by 12%
</p>

</div>

);

}
