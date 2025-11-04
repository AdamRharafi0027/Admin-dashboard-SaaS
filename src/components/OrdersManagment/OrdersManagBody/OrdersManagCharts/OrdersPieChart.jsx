import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const statusData = [
  { name: "Delivered", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Cancelled", value: 10 },
  { name: "Returned", value: 5 },
];

const COLORS = ["#10b981", "#facc15", "#ef4444", "#6366f1"];

const OrdersPieChart = () => {
  return (
    <>
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[500px] pb-20">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">
        Orders Status Distribution
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

    </>
  )
}

export default OrdersPieChart