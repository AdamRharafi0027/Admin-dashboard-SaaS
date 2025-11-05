import { CircleUserRound } from "lucide-react";
import exampleImage from "../../../../public/vite.svg";

const OrdersTable = () => {
  const orders = [
    {
      username: "username",
      orderNumber: "1",
      productImage: exampleImage,
      productName: "Product",
      productPrice: "320",
      productStatus: "Delivered",
    },
    {
      username: "username",
      orderNumber: "2",
      productImage: exampleImage,
      productName: "Product",
      productPrice: "320",
      productStatus: "Delivered",
    },
    {
      username: "username",
      orderNumber: "3",
      productImage: exampleImage,
      productName: "Product",
      productPrice: "320",
      productStatus: "Pending",
    },
    {
      username: "username",
      orderNumber: "4",
      productImage: exampleImage,
      productName: "Product",
      productPrice: "320",
      productStatus: "Delivered",
    },
  ];

  return (
    <>
      <section className=" w-full">
        <h3 className="text-[#475569] mb-5 text-2xl">Latest Orders</h3>
        {/* <table className="flex flex-col gap-5 overflow-y-scroll h-100 ">
          <tr className="bg-[#F1F5F9] rounded-lg text-[#475569] flex px-15 py-5 gap-25 items-center mr-9 sticky top-0 justify-between">
            <th>Costomers</th>
            <th>Order N</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>

          {orders.map((order, index) => {
            return (
              <tr
                className="bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 justify-between"
                key={index}
              >
                <td className="flex items-center gap-2">
                  <h3>{order.username}</h3>
                </td>
                <td>#{order.orderNumber}</td>
                <td className="flex items-center gap-2">
                  <img src={order.productImage} alt="" />
                  <h3>{order.productName}</h3>
                </td>
                <td>${order.productPrice}</td>
                <td>
                  <button
                    className={` ${
                      order.productStatus === "Pending"
                        ? "bg-[#F59E0B]"
                        : "bg-[#22C55E]"
                    } text-white p-2 rounded-md cursor-pointer`}
                  >
                    {order.productStatus}
                  </button>
                </td>
              </tr>
            );
          })}
        </table> */}
        <div className="overflow-y-auto max-h-[400px] rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#86b8ff] sticky top-0 z-10">
              <tr className="text-[#475569] text-left">
                <th className="px-6 py-3">Costomers</th>
                <th className="px-6 py-3">Order N</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th> 
              </tr>
            </thead>

            <tbody className="bg-[#F9F9F9]">
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-3 font-medium">{order.username}</td>
                  <td className="px-13 py-3">{order.orderNumber}</td>
                  <td className="px-1 py-3 flex items-center gap-3">
                    <img src={order.productImage} alt="" />
                    <h3>{order.productName}</h3>
                  </td>
                  <td className="px-6 py-3">{order.productPrice}</td>
                  <td className="px-3 py-3">
                    <button
                    className={` ${
                      order.productStatus === "Pending"
                        ? "bg-[#F59E0B]"
                        : "bg-[#22C55E]"
                    } text-white p-2 rounded-md cursor-pointer`}
                  >
                    {order.productStatus}
                  </button>
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

export default OrdersTable;
