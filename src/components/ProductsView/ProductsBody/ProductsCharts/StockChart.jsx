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

const stockData = [
  {
    name: "Hoodie",
    stock: 120,
  },
  {
    name: "T-Shirt",
    stock: 300,
  },
  {
    name: "Sneakers",
    stock: 180,
  },
  {
    name: "Jacket",
    stock: 90,
  },
  {
    name: "Cap",
    stock: 200,
  },
];
const StockChart = () => {
  return (
    <div className="w-full h-[350px] bg-white p-4 rounded-xl shadow">
      <h3 className="text-xl font-semibold text-[#475569] mb-4">
        Stock Overview
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#2563EB" barSize={40} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};



export default StockChart