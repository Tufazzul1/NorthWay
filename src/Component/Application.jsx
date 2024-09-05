import { RiProfileLine } from "react-icons/ri";
import SectionTitle from "../Shared/SectionTitle";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaRegNewspaper, FaSearch, FaSitemap } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { LuMonitorDot } from "react-icons/lu";


const Application = () => {
    return (
        <div className="my-16 max-w-6xl mx-auto">
            <div className="flex mx-auto text-center md:w-6/12 p-4">
                <SectionTitle heading={"Our Application"} color={"Process"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></SectionTitle>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <RiProfileLine className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">Client Profile Review</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <FcSmartphoneTablet className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">Onboarding meeting</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <FaSearch className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">University Search</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <FaRegNewspaper className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">Statement of <span className="font-normal"> purpose,cv review and edit</span></h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <IoMdSchool className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">University Shortlist</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <LuMonitorDot className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">University Application</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E]">
                        <FaSitemap className="text-2xl" />
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">Arranging mock interview</h4>
                </div>
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <div className="border-2 text-black border-dotted p-3 rounded-full border-black hover:bg-[#F6941E] hover:text-white">
                        <h3 className="text-black font-bold hover:text-white">VISA</h3>
                    </div>
                    <h4 className="font-bold border-2 border-balck px-6 text-center mt-4">Visa application for submission</h4>
                </div>
            </div>

        </div>
    );
};

export default Application;