import Card from "../../Card";

const stats = [
    { title: "Revenues", total: "$12,00K" },
    { title: "Total Orders", total: "$12,00K" },
    { title: "Total Customers", total: "+312" },
    { title: "Total Sells", total: "+100" },
  ];

const ProductsStats = () => {
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

export default ProductsStats