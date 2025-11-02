
import { CircleUserRound, Crown } from "lucide-react";

const BestCustomers = () => {
  // ✅ Dynamic Data
  const topCustomers = [
    {
      name: "John Carter",
      rank: 1,
      color: "#2563EB", // blue
      crown: true,
    },
    {
      name: "Sophie Miller",
      rank: 2,
      color: "#5C8AEF", // lighter blue
      crown: false,
    },
    {
      name: "Daniel Smith",
      rank: 3,
      color: "#8DADF2", // lightest blue
      crown: false,
    },
  ];

  return (
    <div className="card bg-[#F1F5F9] rounded-lg p-8 w-full max-w-md shadow-md">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Top Customers</h1>
      <p className="text-[#475569] mb-8">See your best performing customers</p>

      {/* Customer Cards */}
      <div className="flex flex-col gap-6">
        {topCustomers.map((customer, index) => (
          <div
            key={index}
            className="relative rounded-lg text-white flex justify-between items-center px-5 py-4 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: customer.color }}
          >
            {/* Crown for #1 */}
            {customer.crown && (
              <Crown
                className="absolute -top-8 -left-6 rotate-[-30deg]"
                size={60}
                fill="#FBBF24"
                color="#FBBF24"
              />
            )}

            {/* Left side */}
            <div className="flex items-center gap-3">
              <CircleUserRound
                size={48}
                className="p-1 bg-white/20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{customer.name}</h3>
                <p className="text-sm text-white/80">Customer #{customer.rank}</p>
              </div>
            </div>

            {/* Rank Badge */}
            <span className="text-3xl font-bold drop-shadow-md">
              #{customer.rank}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCustomers;
