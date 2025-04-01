import Logo from "./Logo";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from '../../context/LanguageContext';
function NavBar() {
    const { language } = useLanguage();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Function to close the sidebar if clicked outside
        const closeSidebarOnClickOutside = (e) => {
            if (!e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
                setIsSidebarOpen(false);
            }
        };

        // Add event listener
        document.addEventListener('click', closeSidebarOnClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', closeSidebarOnClickOutside);
        };
    }, []);

    return (
        <nav className="absolute top-0 left-0 w-full flex justify-center z-50">
            <div className="mt-3 md:mt-6 lg:w-[95%] 2xl:w-[90%] w-[96%] px-4 sm:px-6 text-lg sm:text-xl md:text-2xl lg:text-[20px] h-[72px] lg:h-[96px]  bg-[#0A1A33] rounded-lg flex  justify-between items-center shadow-[0.5px_1px_40px_0px_rgba(255,255,255,0.25)]">

                {/* Logo */}
                <div className="block lg:hidden flex-nowrap whitespace-nowrap menu-icon" onClick={toggleSidebar}>
                    <MenuIcon />
                </div>
                <div className="">
                    <Logo />
                </div>

                {/* Navigation Items */}
                {/* Menu Icon (for small screens) */}
                <div className="hidden lg:flex flex-nowrap whitespace-nowrap">
                    <NavItem />
                </div>


                {/* Sidebar */}
                <div
                    className={`fixed top-0 
                ${language === 'ar' ? 'right-0' : 'left-0'} 
                w-1/2 sm:w-1/3 md:w-1/4 bg-[#0A1A33] text-white 
                transform sidebar 
                ${isSidebarOpen ? 'translate-x-0' : language === 'ar' ? 'translate-x-full' : '-translate-x-full'} 
                transition-transform duration-300`}
                >
                    {/* Sidebar content */}
                    <Menu sideBar={toggleSidebar}/>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
