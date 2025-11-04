import { Bolt, CircleUserRound, Eye, Image, Trash } from "lucide-react";
import exampleImage from "../../../../public/vite.svg";

const ProductsTable = () => {
  const Products = [
    {
      product_name: "product",
      product_category: "games",
      product_image: exampleImage,
      product_name: "Product",
      product_price: 320,
      product_stock: 45,
      product_progress: "+20%",
      product_status: "available",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      product_name: "product",
      product_category: "games",
      product_image: exampleImage,
      product_name: "Product",
      product_price: 320,
      product_stock: 45,
      product_progress: "+20%",
      product_status: "available",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      product_name: "product",
      product_category: "games",
      product_image: exampleImage,
      product_name: "Product",
      product_price: 320,
      product_stock: 45,
      product_progress: "+20%",
      product_status: "available",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
    {
      product_name: "product",
      product_category: "games",
      product_image: exampleImage,
      product_name: "Product",
      product_price: 320,
      product_stock: 45,
      product_progress: "+20%",
      product_status: "available",
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
        <h3 className="text-[#475569] mb-5 text-2xl">Latest Orders</h3>

        <div className="overflow-y-auto max-h-[400px] rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#86b8ff] sticky top-0 z-10">
              <tr className="text-[#475569] text-left">
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Progress</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-[#F9F9F9]">
              {Products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-3">
                    <img
                      src={product.product_image}
                      alt={product.product_name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-6 py-3 font-medium">
                    {product.product_name}
                  </td>
                  <td className="px-6 py-3">{product.product_price}</td>
                  <td className="px-6 py-3">{product.product_category}</td>
                  <td className="px-6 py-3">{product.product_stock}</td>
                  <td className="px-6 py-3">
                    <div className="bg-green-300 w-20 text-center text-green-700 rounded-md py-1">
                        {product.product_progress}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
                      {product.product_status}
                    </span>
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

export default ProductsTable;
