import { FaStar } from "react-icons/fa";
import studyImg from "../assets/study.png"
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const Study = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 gap-5">
            <div className="flex-1 p-4">
                <img src={studyImg} alt="studyImage" />
            </div>
            <div className="flex-1 p-4">
                <div>
                    <SectionTitle heading={"Why Study"} color={"in USA?"} subHeading={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-"}></SectionTitle>
                </div>
                <div>
                    <h3 className="text-xl font-bold my-4">Quick facts</h3>
                    <div className="space-y-1">
                        <p className="flex items-center gap-2"><FaStar className="text-[#F6941E]" /> USA hosts more than a million international students</p>
                        <p className="flex items-center gap-2"><FaStar className="text-[#F6941E]" />Over 25% of world’s top 100 universities are in the USA</p>
                        <p className="flex items-center gap-2"><FaStar className="text-[#F6941E]" />Post-study stay back visas (OPT) up to 3 years for STEM programs</p>
                        <p className="flex items-center gap-2"><FaStar className="text-[#F6941E]" />Internships (CPT) up to 12 months while studying</p>
                        <p className="flex items-center gap-2"><FaStar className="text-[#F6941E]" />Merit Based & Need Based Scholarships</p>
                    </div>
                </div>
                <div className="mt-4">
                    <Button text={"See More"}></Button>
                </div>
            </div>
        </div>
    );
};

export default Study;