import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Grid, PhoneCall, Info, Package } from "lucide-react";

const BottomBar = () => {
  const location = useLocation();

  const tabs = [
    { id: "home", path: "/", icon: <Home size={24} />, label: "Home" },
    { id: "grid", path: "/categories", icon: <Grid size={24} />, label: "Grid" },
    { id: "box", path: "/products", icon: <Package size={24} />, label: "Box" },
    { id: "phone", path: "/contactus", icon: <PhoneCall size={24} />, label: "Phone" },
    { id: "info", path: "/about", icon: <Info size={24} />, label: "Info" },
  ];

  return (
    <div className="lg:hidden !z-[99] fixed bottom-0 left-1/2 -translate-x-1/2 w-[100%] bg-[#131b27] flex items-center justify-between px-6 py-3 shadow-lg ">
      {tabs.map((tab) => (
        <div key={tab.id} className="relative flex items-center justify-center w-full">
          {location.pathname === tab.path && (
            <motion.div
              layoutId="activeTab"
              className="absolute shadow-blue-900 shadow-lg !-top-[2.5rem] w-14 h-14 bg-white rounded-full flex items-center justify-center"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab.icon}
            </motion.div>
          )}
          <NavLink
            to={tab.path}
            className={`relative z-10 p-2 ${
              location.pathname === tab.path ? "text-[#131b27]" : "text-white opacity-70"
            }`}
          >
            {location.pathname !== tab.path && tab.icon}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
