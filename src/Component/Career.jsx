import careerImg from "../assets/Career.png"
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const Study = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 gap-5">

            <div className="flex-1 p-4">
                <div>
                    <SectionTitle heading={"Career"} color={"& Industry"} subHeading={"One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills and environmental quality."}></SectionTitle>
                </div>
                <div className="mt-4">
                    <Button text={"See More"}></Button>
                </div>
            </div>
            <div className="flex-1 p-4">
                <img src={careerImg} alt="career Image" />
            </div>
        </div>
    );
};

export default Study;