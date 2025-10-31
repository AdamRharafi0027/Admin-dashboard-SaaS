"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4780 },
  { name: "May", sales: 5890 },
  { name: "Jun", sales: 4390 },
  { name: "Jul", sales: 6490 },
];

const SummarySales = () => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-200 scale-90">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Summary Sales</h2>
        <span className="text-sm text-gray-500">Last 7 months</span>
      </div>

      {/* Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" tick={{ fill: "#888" }} />
            <YAxis tick={{ fill: "#888" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "1px solid #eee",
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Footer */}
      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-sm text-gray-500">Total Sales</p>
          <h3 className="text-2xl font-bold text-gray-800">$32,550</h3>
        </div>
        <div className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
          +12.3%
        </div>
      </div>
    </div>
  );
};

export default SummarySales;
