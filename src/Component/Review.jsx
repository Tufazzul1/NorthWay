import SectionTitle from "../Shared/SectionTitle";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import reviewer1 from "../assets/reviwer1.jpeg"
import reviewer2 from "../assets/reviwer2.jpeg"
import reviewer3 from "../assets/reviwer3.jpeg"


const Review = () => {
    const reviews = [
        {
            id: 1,
            comment: "We are the representatives of more than 30+ universities in Australian countries and our admission",
            name: "Lisa Dowen",
            st: "Student",
            img: reviewer1
        },
        {

            id: 2,
            comment: "We are the representatives of more than 30+ universities in Australian countries and our admission",
            name: "Lisa Dowen",
            st: "Student",
            img: reviewer2
        },
        {
            id: 3,
            comment: "We are the representatives of more than 30+ universities in Australian countries and our admission",
            name: "Lisa Dowen",
            st: "Student",
            img: reviewer3
        }
    ]
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="w-6/12">
                <SectionTitle heading={"Whats's Our"} color={"Student Say"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {
                    reviews.map(review =>
                        <div key={review?.id} className="p-3 bg-white shadow-lg gap-4">
                            <FaQuoteLeft className="text-[#F6941E] text-xl mb-5" />
                            <p>{review?.comment}</p>
                            <div className="flex my-4">
                                <FaStar className="text-[#F6941E]" />
                                <FaStar className="text-[#F6941E]" />
                                <FaStar className="text-[#F6941E]" />
                                <FaStar className="text-[#F6941E]" />
                                <FaStar className="text-[#F6941E]" />
                            </div>
                            <div className="flex items-center">
                                <img className="h-10 rounded-full w-10" src={review?.img} alt="" />
                                <div>
                                    <h3 className="font-bold">{review?.name}</h3>
                                    <p>{review?.st}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;