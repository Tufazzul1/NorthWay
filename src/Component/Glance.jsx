import SectionTitle from "../Shared/SectionTitle";


const Glance = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mx-auto">
                <SectionTitle heading={"USA At a"} color={"Glance"}></SectionTitle>
            </div>
            <div className="p-4">
                <div className="grid md:grid-cols-3 p-6">
                    <div className="bg-[#F6941E] p-3 text-center text-white">
                        <h3 className="font-bold text-lg">Course Duration</h3>
                        <p>4 Years (Bachelor’s)</p>
                        <p>2 Years (Master’s)</p>
                    </div>
                    <div className="ml-2 mr-2 p-3 bg-[#F6941E] text-center text-white">
                        <h3 className="font-bold text-lg">Intake</h3>
                        <p>January, May, September</p>
                    </div>
                    <div className="p-3 bg-[#F6941E] text-center text-white">
                        <h3 className="font-bold text-lg">Application Fee</h3>
                        <p>40 To 200 (USD)</p>
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="font-bold text-lg">Requirements</h3>
                        <p>GRE/GMAT + IELTS/TOEFL/PTE</p>
                        <p>Academics: Above 55%</p>
                    </div>
                    <div className="p-3 text-center ml-2 mr-2">
                        <h3 className="font-bold text-lg">Language Proficiency</h3>
                        <p>IELTS- 6+, TOEFL-70+</p>
                        <p>Duolingo-90+, PTE-50+</p>
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="font-bold text-lg">Tuition Fee (Yearly)</h3>
                        <p>10000 To 55000 (USD)</p>
                    </div>
                    <div className="p-3 bg-[#F6941E] text-white text-center">
                        <h3 className="font-bold text-lg">Living Cost (Yearly)</h3>
                        <p>10000 To 18000 (USD)</p>
                    </div>
                    <div className="p-3 bg-[#F6941E] text-white ml-2 mr-2 text-center">
                        <h3 className="font-bold text-lg">Visa Application</h3>
                        <p>160 (USD)</p>
                        <p>SEVIS Fee 350 (USD)</p>
                    </div>
                    <div className="p-3 bg-[#F6941E] text-white text-center">
                        <h3 className="font-bold text-lg">Air Ticket</h3>
                        <p>100000 To 150000 (BDT)</p>
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="font-bold text-lg">Processing Time</h3>
                        <p>9-12 Months</p>
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="font-bold text-lg">Part Time Work</h3>
                        <p>20 Hrs (per Week)</p>
                    </div>
                    <div className="p-3 text-center">
                        <h3 className="font-bold text-lg">Post Study Work Permit</h3>
                        <p>12 Months for All Programs</p>
                        <p>12+ 24 Months Extension for STEM</p>
                        <p>(Science, Tech, Engg & Maths)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glance;

