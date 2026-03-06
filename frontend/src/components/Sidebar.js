export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-4">

      <h1 className="text-xl font-bold mb-8">
        SmartFleet AI
      </h1>

      <ul className="space-y-4">

        <li className="hover:text-cyan-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Vehicles
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Requests
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Analytics
        </li>

      </ul>

    </div>
  );
}