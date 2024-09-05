import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import student1 from "../assets/sutdent1.jpeg"
import student2 from "../assets/student2.png"
import student3 from "../assets/student3.jpeg"
import studentBg from "../assets/studentbg.png"
import SectionTitle from '../Shared/SectionTitle';

const testimonials = [
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: student1,
    },
    {   
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: student2,
    },
    {
        name: "Rashmi Borah",
        university: "Northeastern University, Boston",
        image: student3,
    },
];

const Student = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative bg-cover bg-center min-h-[400px] items-center bg-fixed my-24"
            style={{ backgroundImage: `url(${studentBg})` }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div>
                <div className="max-w-6xl mx-auto text-center py-8 z-10 relative text-white">
                    <SectionTitle heading={"Student"} color={"Speaks"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></SectionTitle>
                </div>
                <Slider {...settings} className='absolute mt-10 max-w-6xl mx-auto'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <div className="relative">
                                    <img src={testimonial?.image} alt={testimonial.name} className="w-full h-64 object-cover rounded-lg" />
                                    <button className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.96V6.96a.75.75 0 011.13-.65l5.25 3.04a.75.75 0 010 1.3l-5.25 3.04a.75.75 0 01-1.13-.65z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.university}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <button
            className="ml-[50%] mr-[50%] absolute bottom-[-100px] right-4 z-10 bg-orange-500 rounded-full p-2" 
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="ml-[50%] mr-[50%] absolute bottom-[-100px] left-4 z-10 bg-orange-500 rounded-full p-2"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
};


export default Student;
