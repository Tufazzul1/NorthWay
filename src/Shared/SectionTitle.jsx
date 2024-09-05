

const SectionTitle = ({heading , subHeading, color}) => {
    return (
        <div className="">
            <p className="text-xl md:text-3xl font-bold mb-2">{heading} <span className="text-[#F6941E]">{color}</span></p>
            <h3 className="text-gray-500">{subHeading}</h3>
        </div>
    );
};
 
export default SectionTitle;