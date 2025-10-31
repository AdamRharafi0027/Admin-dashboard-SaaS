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
      <section className="scale-95 w-200">
        <h3 className="text-[#475569] mb-5 text-2xl">Latest Orders</h3>
        <table className="flex flex-col gap-5 overflow-y-scroll h-100 ">
          <tr className="bg-[#F1F5F9] rounded-lg text-[#475569] flex px-5 py-5 gap-25 items-center mr-9 ">
            <th>Costomers</th>
            <th>Order N</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>

          {orders.map((order, index) => {
            return (
              <tr
                className="bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 "
                key={index}
              >
                <td className="flex items-center gap-2">
                  <CircleUserRound size={40} />
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
        </table>
      </section>
    </>
  );
};

export default OrdersTable;
