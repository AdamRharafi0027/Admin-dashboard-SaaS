import Card from "../../Card";

const ClientsStats = [
  { title: "Total Clients", total: "1,320" },
  { title: "Active Clients", total: "1,000" },
  { title: "Inactive Clients", total: "320" },
  { title: "Top Spender", total: "$3,320" },
];

const ManagClientsStats = () => {
  return (
    <>
      <div className="cards px-10 flex gap-10 text-[#475569] items-center justify-around">
        {ClientsStats.map((stat) => {
          return <Card title={stat.title} total={stat.total} />;
        })}
      </div>
    </>
  );
};

export default ManagClientsStats;
