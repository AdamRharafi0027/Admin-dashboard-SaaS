import { Bolt, CircleUserRound, Eye, Image, Trash } from "lucide-react";
import exampleImage from "../../../../public/vite.svg";

const ManagClientsTable = () => {
  const client_table = [
    {
      client_avatar: exampleImage,
      client_name: "Jone k..",
      client_email: "Jone@gma...",
      client_country: "Morocco",
      client_joined_date: "20/3/2022",
      client_orders: 23,
      client_status: "active",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
     {
      client_avatar: exampleImage,
      client_name: "Jone k..",
      client_email: "Jone@gma...",
      client_country: "Morocco",
      client_joined_date: "20/3/2022",
      client_orders: 23,
      client_status: "active",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
     {
      client_avatar: exampleImage,
      client_name: "Jone k..",
      client_email: "Jone@gma...",
      client_country: "Morocco",
      client_joined_date: "20/3/2022",
      client_orders: 23,
      client_status: "active",
      actions: [
        <Eye color="#2563EB" />,
        <Bolt color="#2563EB" />,
        <Trash color="#2563EB" />,
      ],
    },
     {
      client_avatar: exampleImage,
      client_name: "Jone k..",
      client_email: "Jone@gma...",
      client_country: "Morocco",
      client_joined_date: "20/3/2022",
      client_orders: 23,
      client_status: "active",
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
        <h3 className="text-[#475569] mb-5 text-2xl">Products Table</h3>

        <div className="overflow-y-auto max-h-[400px] rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-[#86b8ff] sticky top-0 z-10">
              <tr className="text-[#475569] text-left">
                <th className="px-6 py-3">Avatar</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Country</th>
                <th className="px-6 py-3">Joined Date</th>
                <th className="px-6 py-3">Orders</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-[#F9F9F9]">
              {client_table.map((client, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-3">
                    <img
                      src={client.client_avatar}
                      alt={client.client_name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-6 py-3 font-medium">
                    {client.client_name}
                  </td>
                  <td className="px-6 py-3">{client.client_email}</td>
                  <td className="px-6 py-3">{client.client_country}</td>
                  <td className="px-6 py-3">{client.client_joined_date}</td>
                  <td className="px-10 py-3">
                        {client.client_orders}
                  </td>
                  <td className="px-6 py-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm">
                      {client.client_status}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <ul className="flex items-center gap-3 text-blue-600">
                      {client.actions.map((action, i) => (
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

export default ManagClientsTable;
