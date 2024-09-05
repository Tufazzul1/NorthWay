import Uni1 from "../assets/uni1.png"
import Uni2 from "../assets/uni2.png"
import Uni3 from "../assets/uni3.png"
import UniBg from "../assets//Unibg.png"
import SectionTitle from "../Shared/SectionTitle";
import Button from "../Shared/Button";

const Univercities = () => {
    return (
        <div
            className="relative bg-cover bg-center h-auto md:min-h-[750px] items-center bg-fixed flex flex-col"
            style={{ backgroundImage: `url(${UniBg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 w-full text-center">
                <div className="text-white md:py-10 mt-8 flex justify-center">
                    <SectionTitle heading={"Popular"} color={"Universities"}></SectionTitle>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-8">
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img className="w-[70px]" src={Uni1} alt="UniLogo" />
                        <h4 className="font-bold">University of Connecticut, Connecticut
                            (Public Ivy)</h4>

                    </div>
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img  className="w-[70px]" src={Uni2} alt="UniLogo" />
                        <h4>Arizona State University, Phoenix, Arizona</h4>

                    </div>
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img  className="w-[70px]"  src={Uni3} alt="UniLogo" />
                        <h4>University of California, Riverside, California</h4>

                    </div>
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img  className="w-[70px]" src={Uni2} alt="UniLogo" />
                        <h4>Arizona State University, Phoenix, Arizona</h4>

                    </div>
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img src={Uni1} alt="UniLogo" />
                        <h4>University of Connecticut, Connecticut
                            (Public Ivy)</h4>

                    </div>
                    <div className="bg-white px-6 py-8 flex flex-col justify-center items-center">
                        <img  className="w-[70px]"  src={Uni3} alt="UniLogo" />
                        <h4>University of California, Riverside, California</h4>

                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <Button text={"View More"}></Button>
                </div>
            </div>

        </div>
    );
};

export default Univercities;