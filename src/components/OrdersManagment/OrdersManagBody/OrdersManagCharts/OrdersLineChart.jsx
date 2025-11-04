import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ordersData = [
  { month: "Jan", orders: 320 },
  { month: "Feb", orders: 280 },
  { month: "Mar", orders: 400 },
  { month: "Apr", orders: 350 },
  { month: "May", orders: 500 },
  { month: "Jun", orders: 470 },
  { month: "Jul", orders: 520 },
  { month: "Aug", orders: 610 },
  { month: "Sep", orders: 580 },
  { month: "Oct", orders: 620 },
  { month: "Nov", orders: 700 },
  { month: "Dec", orders: 750 },
];

const OrdersLineChart = () => {
  return (
    <div className="bg-white p-6  rounded-xl shadow-md w-full h-[400px]">
      <h3 className="text-xl font-semibold text-slate-700 mb-6">
        Orders Per Month
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ordersData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 6, fill: "#3b82f6" }}
            activeDot={{ r: 8, fill: "#2563eb" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersLineChart;
