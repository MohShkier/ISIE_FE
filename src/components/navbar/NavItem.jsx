import { NavLink } from "react-router-dom";

function NavItem() {
  return (
    <ul className="flex space-x-4 text-white flex-row items-center gap-x-1">
      {[
        { to: "/", label: "Home" },
        { to: "/categories", label: "Categories" },
        { to: "/products", label: "Our Products" },
        { to: "/contactus", label: "Contact Us" },
        { to: "/about", label: "About Us" },
      ].map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `px-6 h-10 min-w-[112px] flex items-center justify-center rounded-[20px]  relative group ${
                isActive ? "border-[#4283C6] border-2 text-white" : "text-white"
              }`
            }
            style={{ outline: "none" }}
          >
            {({ isActive }) => (
              <>
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#4283C6] transition-all duration-300 group-hover:w-full ${
                    isActive ? "hidden" : ""
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavItem;