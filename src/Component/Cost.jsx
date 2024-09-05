import { Link } from "react-router-dom";
import Button from "../Shared/Button";
import SectionTitle from "../Shared/SectionTitle";
import cost from "../assets/cost.png";

const Cost = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 gap-5">
            <div className="flex-1 p-4">
                <img src={cost} alt="costImage" />
            </div>
            <div className="flex-1 p-4">
                <div>
                    <SectionTitle heading={"Cost of"} color={"Education"} subHeading={"In the U.S., tuition fees vary based on the state, the university funding model, and the student’s country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they’ve rendered an estimate of last year’s average tuition costs, which will roughly reflect the next few years."}></SectionTitle>
                </div>
                <div>
                    <h3 className="text-xl font-bold my-4">Quick facts</h3>
                    <div className="space-y-1">
                        <ol className="list-disc ml-6">
                            <li className="hover:text-[#F6941E]">
                                <Link to="/" className="flex items-center gap-2">Total Expenses: $41,535</Link>
                            </li>
                            <li className="hover:text-[#F6941E]">
                                <Link to="/" className="flex items-center gap-2">Tuition Fees for one-year (Indicative): $25,000</Link>
                            </li>
                            <li className="hover:text-[#F6941E]">
                                <Link to="/" className="flex items-center gap-2">Living and Accommodation: $15,000</Link>
                            </li>
                            <li className="hover:text-[#F6941E]">
                                <Link to="/" className="flex items-center gap-2">Airfare from India to USA: $1,000</Link>
                            </li>
                            <li className="hover:text-[#F6941E]">
                                <Link to="/" className="flex items-center gap-2">Visa Fees (Visa & SEVIS): $535</Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cost;
