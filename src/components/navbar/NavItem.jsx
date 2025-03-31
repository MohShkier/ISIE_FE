import { NavLink } from "react-router-dom";
import EnLan from "../Svg/EnLan";
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from "react-i18next";
function NavItem() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <ul className="flex text-white flex-row items-center gap-x-1">
      {[
        { to: "/", label: t("home") },
        { to: "/categories", label: t("categories") },
        { to: "/products", label: t("ourProducts") },
        { to: "/contactus", label: t("contactUs") },
        { to: "/about", label: t("aboutUs") },
      ].map((item) => (
        <li key={item.to} className="relative">
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `px-4 xl:px-6 h-10 min-w-[112px] flex items-center justify-center rounded-[20px] relative transition-all duration-300 ${language === "ar" ? "font-noto" : "font-sans"
              } border-2 ${isActive
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
      <li
        onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
        aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'} language`}
      >
        <EnLan />

      </li>
    </ul>
  );
}

export default NavItem;
