import { GoArrowRight } from "react-icons/go";

const Button = ({ text, className }) => {
    return (
        <button
            className={`btn bg-white text-[#F6941E] border-2 border-[#F6941E] hover:bg-[#F6941E] rounded-none hover:text-white ${className}`}
        >
            {text} <GoArrowRight /> 
        </button>
    );
};

export default Button;
