import Logo from "./Logo";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom"

function NavBar() {
    const location = useLocation();
    return (
        <nav className={"absolute top-0 left-0 w-full flex justify-center z-50 " + (location.pathname !== "/about" ? "bg-[#EEE]" : "")}>
            <div className="mt-6 px-6 text-[20px] h-[72px] lg:h-[96px] font-sans bg-[#0A1A33] w-[90%] rounded-full flex justify-between items-center shadow-[2px_2px_4px_rgba(0,0,0,0.50)]">
                <div className="max-lg:w-full">
                    <Logo />
                </div>

                <div className="hidden lg:flex">
                    <NavItem />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
