import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const productSales = [
  { name: "Jan", product1: 4000, product2: 2400 },
  { name: "Feb", product1: 3000, product2: 2210 },
  { name: "Mar", product1: 2000, product2: 2290 },
  { name: "Apr", product1: 2780, product2: 2000 },
  { name: "May", product1: 1890, product2: 2181 },
  { name: "Jun", product1: 2390, product2: 2500 },
];

const SalesChart = () => {
  return (
    <section className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-[#475569] mb-5 text-2xl font-semibold">
        Products Sales Overview
      </h3>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={productSales} margin={{ right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fill: "#475569" }} />
            <YAxis tick={{ fill: "#475569" }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Area
              type="monotone"
              dataKey="product1"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.3}
              stackId="1"
              name="Product 1"
            />
            <Area
              type="monotone"
              dataKey="product2"
              stroke="#7c3aed"
              fill="#8b5cf6"
              fillOpacity={0.3}
              stackId="1"
              name="Product 2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-slate-900 text-white rounded-lg shadow-lg">
        <p className="font-semibold mb-2">{label}</p>
        <p className="text-blue-400">
          Product 1: <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-indigo-400">
          Product 2: <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default SalesChart