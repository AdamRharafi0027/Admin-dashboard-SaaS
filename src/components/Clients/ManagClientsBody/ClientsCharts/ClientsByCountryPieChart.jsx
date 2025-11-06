import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const countryData = [
  { name: "USA", value: 400 },
  { name: "United Kingdom", value: 250 },
  { name: "Morocco", value: 180 },
  { name: "France", value: 120 },
  { name: "Canada", value: 90 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

const ClientsByCountryPieChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[400px]">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        Clients by Country
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={countryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} - ${(percent * 100).toFixed(0)}%`
            }
          >
            {countryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClientsByCountryPieChart;
