import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Study Destination", path: "/destination" },
        { name: "Gallery", path: "/gallery" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact Us", path: "/contact" }
    ];

    const renderNavLinks = () => {
        return navItems.map((item, index) => (
            <li key={index}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'text-[#F6941E] font-bold' : 'font-bold'
                    }
                    to={item.path}
                >
                    {item.name}
                </NavLink>
            </li>
        ));
    };

    return (
        <nav className="navbar bg-base-100 max-w-7xl mx-auto py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {renderNavLinks()}
                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-[100px]" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {renderNavLinks()}
                </ul>
            </div>
            <div className="navbar-end">
                <Button text={"Aquire Now"}></Button>
            </div>
        </nav>
    );
};

export default Navbar;
