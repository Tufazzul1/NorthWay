import { GoArrowRight } from "react-icons/go";

const Button = ({ text, className }) => {
    return (
        <button
            className={`btn bg-white text-[#ff5c33] border-2 border-[#ff5c33] hover:bg-[#ff5c33] rounded-none hover:text-white ${className}`}
        >
            {text} <GoArrowRight /> 
        </button>
    );
};

export default Button;
