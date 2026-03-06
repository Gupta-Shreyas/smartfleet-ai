import axios from "axios";

export default function EmergencyMode() {

const activateEmergency = async () => {

await axios.post("http://localhost:5000/api/emergency");

};

return (

<div className="bg-red-700 p-4 rounded-lg text-white">

<h2 className="text-lg mb-4">
Emergency Override
</h2>

<button
onClick={activateEmergency}
className="bg-red-500 px-6 py-3 rounded text-lg font-bold"

>

🚨 Activate Emergency Mode </button>

</div>

);

}
