import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const activeClientsData = [
  { month: "Jan", active: 220 },
  { month: "Feb", active: 250 },
  { month: "Mar", active: 270 },
  { month: "Apr", active: 300 },
  { month: "May", active: 340 },
  { month: "Jun", active: 380 },
  { month: "Jul", active: 420 },
  { month: "Aug", active: 460 },
  { month: "Sep", active: 500 },
  { month: "Oct", active: 550 },
  { month: "Nov", active: 620 },
  { month: "Dec", active: 700 },
];

const ActiveClientsLineChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[400px]">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        Active Clients Over Time
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activeClientsData} margin={{ top: 10, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 14 }} />
          <YAxis tick={{ fill: "#475569", fontSize: 14 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
          />
          <Legend />

          <Line
            type="monotone"
            dataKey="active"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 6, fill: "#10b981" }}
            activeDot={{ r: 8, fill: "#059669" }}
            name="Active Clients"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveClientsLineChart;
