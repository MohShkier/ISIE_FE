import { NavLink } from "react-router-dom";

function NavItem() {
  return (
    <ul className="flex text-white flex-row items-center gap-x-1">
      {[
        { to: "/", label: "Home" },
        { to: "/categories", label: "Categories" },
        { to: "/products", label: "Our Products" },
        { to: "/contactus", label: "Contact Us" },
        { to: "/about", label: "About Us" },
      ].map((item) => (
        <li key={item.to} className="relative">
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `px-6 h-10 min-w-[112px] flex items-center justify-center rounded-[20px] relative transition-all duration-300
              border-2 ${
                isActive
                  ? "border-[#4283C6] text-white"
                  : "border-transparent text-white hover:text-[#4283C6]"
              }`
            }
            style={{ outline: "none" }}
          >
            {item.label}
            {/* Border animation effect */}
            <span className="absolute inset-0 rounded-[20px] border-2 border-[#4283C6] scale-0 transition-transform duration-300 hover:scale-100"></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItem;
