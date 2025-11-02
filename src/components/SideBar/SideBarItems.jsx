// import {
//   Box,
//   LayoutDashboard,
//   MessageCircleWarning,
//   Settings,
//   ShoppingBag,
//   Users,
// } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const SideBarItems = () => {
//     const [isActivated, setIsActivated] = useState("Dashboard")
//   const sideBarItems = [
//     {
//       name: "Dashboard",
//       icon: <LayoutDashboard className="z-40" size={40} />,
//       path:"/"
//     },
//     {
//       name: "Products",
//       icon: <Box className="z-40" size={40} />,
//       path:"/products"
//     },
//     {
//       name: "Orders",
//       icon: <ShoppingBag className="z-40" size={40} />,
//       path:"/orders"
//     },
//     {
//       name: "Clients",
//       icon: <Users className="z-40" size={40} />,
//       path:"/clients"
//     },
//     {
//       name: "Reports",
//       icon: <MessageCircleWarning className="z-40"  size={40} />,
//       path:"/reports"
//     },
//     { name: "Settings", icon: <Settings className="z-40"  size={40} />,
// path:"/settings" },
//   ];

//   return (
//     <>
//       <aside className=" mt-10">
//         <ul className=" w-full flex flex-col gap-18 justify-center ml-20 items-start">
//           {sideBarItems.map((item, index) => {
//             return (
//               <Link to={item.path}
//                 key={index}
//                 className={`flex gap-5 items-center text-3xl font-bold  relative  cursor-pointer ${
//                   isActivated === item.name && " isActivated"
//                 }`}
//                 onClick={() => {
//                   setIsActivated(item.name)
//                 }}
//               >
//                 {item.icon}
//                 <h1 className="z-40">{item.name}</h1>
//               </Link>
//             );
//           })}
//         </ul>
//       </aside>
//     </>
//   );
// };

// export default SideBarItems;

import {
  Box,
  LayoutDashboard,
  MessageCircleWarning,
  Settings,
  ShoppingBag,
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
    { name: "Reports", icon: <MessageCircleWarning size={28} />, path: "/reports" },
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
