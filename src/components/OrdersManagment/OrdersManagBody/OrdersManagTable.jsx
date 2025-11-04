import { Bolt, Eye, Trash } from "lucide-react";

const OrdersManagTable = () => {
  const Orders = [
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      order_id: 1,
      customer_email: "jack@gmail.com",
      order_total_price: 231,
      order_date: "20/01/2025",
      product_price: 320,
      product_status: "Shipped",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    
  ];

  return (
    <>
      <section className="w-full">
        <h3 className="text-[#475569] mb-5 text-2xl">Orders Table</h3>

        <div className="overflow-y-auto max-h-[400px] rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#86b8ff] sticky top-0 z-10">
              <tr className="text-[#475569] text-left">
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Total Price</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-[#F9F9F9]">
              {Orders.map((product) => (
                <tr
                  key={product.order_id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-12 py-3 font-medium">{product.order_id}</td>
                  <td className="px-3 py-3">{product.customer_email}</td>
                  <td className="px-12 py-3">{product.order_total_price}</td>
                  <td className="px-3 py-3">{product.order_date}</td>
                  <td className="px-3 py-3">
                    <div className="bg-blue-300 w-20 text-center text-blue-700 rounded-md py-1">
                      {product.product_status}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <ul className="flex items-center gap-3 text-blue-600">
                      {product.actions.map((action, i) => (
                        <li key={i} className="cursor-pointer hover:underline">
                          {action}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default OrdersManagTable;
