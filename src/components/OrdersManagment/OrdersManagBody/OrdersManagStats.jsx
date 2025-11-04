import Card from "../../Card";
const stats = [
  { title: "Total Orders", total: "1,220" },
  { title: "Pending Orders", total: "133" },
  { title: "Delivered Orders", total: "1,312" },
  { title: "Cancelled Orders", total: "20" },
];
const OrdersManagStats = () => {
  return (
    <>
      <div className="cards px-10 flex gap-10 text-[#475569] items-center justify-around">
        {stats.map((stat) => {
          return <Card title={stat.title} total={stat.total} />;
        })}
      </div>
    </>
  )
}

export default OrdersManagStats