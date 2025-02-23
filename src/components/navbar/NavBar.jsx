import Logo from "./Logo";
import NavItem from "./NavItem";

function NavBar() {
    return (
        <nav className="flex justify-center ">
            <div className=" mt-6 px-6 text-[20px] h-[96px]  font-sans bg-[#0A1A33] w-[90%] rounded-full flex justify-between items-center shadow-[2px_2px_4px_rgba(0,0,0,0.50)]">
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
