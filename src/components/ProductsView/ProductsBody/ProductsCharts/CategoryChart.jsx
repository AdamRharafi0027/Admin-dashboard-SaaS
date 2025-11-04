import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const categoryData = [
  { name: "Clothes", value: 400 },
  { name: "Shoes", value: 300 },
  { name: "Accessories", value: 200 },
  { name: "Electronics", value: 150 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];
const CategoryChart = () => {
  return (
    <div className="w-full h-[350px] bg-white p-4 rounded-xl shadow">
      <h3 className="text-xl font-semibold text-[#475569] mb-4">
        Category Distribution
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart