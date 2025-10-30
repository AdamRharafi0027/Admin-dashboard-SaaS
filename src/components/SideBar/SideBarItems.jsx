import {
  Box,
  LayoutDashboard,
  MessageCircleWarning,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useState } from "react";

const SideBarItems = () => {
    const [isActivated, setIsActivated] = useState("Dashboard")
  const sideBarItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="z-40" size={40} />,
      path:"/dashboard"
    },
    {
      name: "Products",
      icon: <Box className="z-40" size={40} />,
      path:"/products"
    },
    {
      name: "Orders",
      icon: <ShoppingBag className="z-40" size={40} />,
      path:"/orders"
    },
    {
      name: "Clients",
      icon: <Users className="z-40" size={40} />,
      path:"/clients"
    },
    {
      name: "Reports",
      icon: <MessageCircleWarning size={40} />,
      path:"/reports"
    },
    { name: "Settings", icon: <Settings size={40} />,
path:"/settings" },
  ];

  return (
    <>
      <aside className=" mt-10">
        <ul className=" w-full flex flex-col gap-18 justify-center ml-20 items-start">
          {sideBarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex gap-5 items-center text-3xl font-bold  relative  cursor-pointer ${
                  isActivated === item.name && " isActivated"
                }`}
                onClick={() => {
                  setIsActivated(item.name)
                }}
              >
                {item.icon}
                <h1 className="z-40">{item.name}</h1>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default SideBarItems;
