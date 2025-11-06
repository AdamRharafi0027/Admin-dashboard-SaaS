import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const clientsJoinedData = [
  { month: "Jan", clients: 120 },
  { month: "Feb", clients: 90 },
  { month: "Mar", clients: 150 },
  { month: "Apr", clients: 200 },
  { month: "May", clients: 170 },
  { month: "Jun", clients: 210 },
  { month: "Jul", clients: 250 },
  { month: "Aug", clients: 230 },
  { month: "Sep", clients: 190 },
  { month: "Oct", clients: 310 },
  { month: "Nov", clients: 350 },
  { month: "Dec", clients: 400 },
];

const ClientsJoinedBarChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[400px]">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        Clients Joined Per Month
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={clientsJoinedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 14 }} />
          <YAxis tick={{ fill: "#475569", fontSize: 14 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
            }}
          />
          <Legend />
          <Bar
            dataKey="clients"
            fill="#3b82f6"
            barSize={35}
            radius={[8, 8, 0, 0]}
            name="Clients Joined"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClientsJoinedBarChart;
