export default function AlertsPanel() {

  const alerts = [
    "⚠ Truck 3 fuel low",
    "⚠ Ambulance Alpha heavily used",
    "🚨 Emergency vehicle dispatched"
  ];

  return (

    <div className="bg-slate-800 p-4 rounded-lg text-white">

      <h2 className="text-lg mb-4">Fleet Alerts</h2>

      {alerts.map((alert, index) => (
        <p key={index}>{alert}</p>
      ))}

    </div>

  );

}