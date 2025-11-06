import {
  Box,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  TrendingUpDown,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarItems = () => {
  const location = useLocation(); // Get current path
  const [activeItem, setActiveItem] = useState(location.pathname || "/");

  const sideBarItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={28} />, path: "/" },
    { name: "Products", icon: <Box size={28} />, path: "/products" },
    { name: "Orders", icon: <ShoppingBag size={28} />, path: "/orders" },
    { name: "Clients", icon: <Users size={28} />, path: "/clients" },
    { name: "Analytics", icon: <TrendingUpDown  size={28} />, path: "/analytics" },
    { name: "Settings", icon: <Settings size={28} />, path: "/settings" },
  ];

  return (
    <aside className="mt-10">
      <ul className="flex flex-col gap-6 ml-3">
        {sideBarItems.map((item, index) => {
          const isActive = activeItem === item.path;
          return (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setActiveItem(item.path)}
                className={`flex items-center gap-4 px-4 py-3 text-lg font-medium  text-white hover:text-gray-700 rounded-l-lg transition-all duration-300
                  ${isActive ? "bg-blue-500 text-white shadow-lg" : "text-gray-700 hover:bg-gray-200"}
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBarItems;
