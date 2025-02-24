import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Grid, PhoneCall, Info, Package } from "lucide-react";

const BottomBar = () => {
  const [selected, setSelected] = useState("home");

  const tabs = [
    { id: "home", icon: <Home size={24} />, label: "Home" },
    { id: "grid", icon: <Grid size={24} />, label: "Grid" },
    { id: "box", icon: <Package size={24} />, label: "Box" },
    { id: "phone", icon: <PhoneCall size={24} />, label: "Phone" },
    { id: "info", icon: <Info size={24} />, label: "Info" },
  ];

  return (
    <div className="lg:hidden !z-[99] fixed bottom-0 left-1/2 -translate-x-1/2 w-[100%] bg-[#131b27]  flex items-center justify-between px-6 py-3 shadow-lg">
      {tabs.map((tab) => (
        <div key={tab.id} className="relative flex items-center justify-center w-full">
          {selected === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute  shadow-blue-900  shadow-lg !-top-[2.5rem] w-14 h-14 bg-white rounded-full flex items-center justify-center "
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab.icon}
            </motion.div>
          )}
          <button
            className={`relative z-10 p-2 ${
              selected === tab.id ? "text-[#131b27]" : "text-white opacity-70"
            }`}
            onClick={() => setSelected(tab.id)}
          >
            {selected !== tab.id && tab.icon} {/* Hide the icon when it's selected */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
