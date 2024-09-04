import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#1E1E1E] px-6 md:px-10 py-5">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link to="#">
                                <img className="w-auto h-9" src={Logo} alt="Logo" />
                            </Link>

                            <p className="max-w-sm mt-4 text-gray-500 dark:text-gray-400">
                                Travel Blog Elementor Template Kit. Powered by Design8. All rights reserved.
                            </p>
                            <div className="flex gap-3 mt-5">
                                <CiFacebook className="text-white text-2xl" />
                                <FaInstagram className="text-white text-2xl" />
                                <FaWhatsapp className="text-white text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Category</h3>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Immigration</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Study Abroad</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Uncategorized</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Scholarship</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">News</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Latest Post</h3>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Study In China</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">ulbright Scholarship In China</Link>
                                <Link to={'/'} className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">How to Apply To Foreign Universities</Link>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Contact Us</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline flex"> <span>
                                <FaLocationDot className="text-[#F6941E] mr-2 h-6" /></span>Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212, (Near American Embassy)</p>
                                <p className="flex mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"><span>
                                    <FaMobileAlt  className="text-[#F6941E] mr-2 h-5"  /></span>+880 1607-002687</p>
                                <p className="flex mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"><span>
                                <MdOutlineMailOutline className="text-[#F6941E] mr-2 text-xl" /></span>info@northwayglobal.com.bd</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-800 dark:text-white">Design and Developed by Ethical Den</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
