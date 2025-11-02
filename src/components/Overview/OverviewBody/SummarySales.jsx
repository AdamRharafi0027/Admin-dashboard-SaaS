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
    <div className="bg-white p-5 rounded-2xl shadow-md w-full ">
      {/* Header */}
      <div className="mb-2 flex justify-between items-center text-[#475569]">
        <h2 className="text-2xl">Summary Sales</h2>
        <h1 className="text-5xl ">$32,000.00</h1>
        <h4>Last 7 months</h4>
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

     
      
    </div>
  );
};

export default SummarySales;




