const StatsOverview = () => {
  const stats = [
    { title: "Revenues", total: "$12,00K" },
    { title: "Total Orders", total: "$12,00K" },
    { title: "Total Customers", total: "+312" },
    { title: "Total Sells", total: "+100" },
  ];
  return (
    <>
      <div className="cards px-10 flex gap-10 text-[#475569] items-center justify-around">
        {stats.map((stat, index) => {
          return (
            <div key={index} className="card bg-white w-50 px-5 flex flex-col gap-2 justify-between py-2 rounded-md">
              <h3 className="font-bold">{stat.title}</h3>
              <h2 className="text-2xl text-end font-bold">{stat.total}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatsOverview;
