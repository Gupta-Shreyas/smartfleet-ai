import { useState } from "react";
import axios from "axios";

export default function RequestVehicle() {

const [form, setForm] = useState({
requestType: "",
passengers: "",
priority: "Medium",
latitude: "",
longitude: ""
});

const handleSubmit = async () => {

```
const data = {
  requestType: form.requestType,
  passengers: form.passengers,
  priority: form.priority,
  location: {
    latitude: Number(form.latitude),
    longitude: Number(form.longitude)
  }
};

await axios.post("http://localhost:5000/api/requestVehicle", data);
```

};

return (

```
<div className="bg-slate-800 p-4 rounded-lg text-white">

  <h2 className="text-lg mb-4">Request Vehicle</h2>

  <input
    placeholder="Request Type"
    className="w-full mb-2 p-2 bg-slate-700"
    onChange={(e)=>setForm({...form,requestType:e.target.value})}
  />

  <input
    placeholder="Passengers"
    className="w-full mb-2 p-2 bg-slate-700"
    onChange={(e)=>setForm({...form,passengers:e.target.value})}
  />

  <input
    placeholder="Latitude"
    className="w-full mb-2 p-2 bg-slate-700"
    onChange={(e)=>setForm({...form,latitude:e.target.value})}
  />

  <input
    placeholder="Longitude"
    className="w-full mb-2 p-2 bg-slate-700"
    onChange={(e)=>setForm({...form,longitude:e.target.value})}
  />

  <select
    className="w-full mb-4 p-2 bg-slate-700"
    onChange={(e)=>setForm({...form,priority:e.target.value})}
  >
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
    <option>Emergency</option>
  </select>

  <button
    onClick={handleSubmit}
    className="bg-cyan-500 px-4 py-2 rounded"
  >
    Submit Request
  </button>

</div>
```

);

}
