import SectionTitle from "../Shared/SectionTitle";
import faqImg from "../assets/faq.png"

const Faq = () => {
    return (
        <div className="my-16 md:px-8 max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 p-2">
                    <div className="p-4">
                    <SectionTitle heading={"Study in"} color={"USA FAQ's"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}></SectionTitle>
                    </div>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-plus join-item border border-base-300">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you work while studying in the United States?
                            </div>
                            <div className="collapse-content">
                                <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border border-base-300">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you work while studying in the United States?
                            </div>
                            <div className="collapse-content">
                                <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border border-base-300">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you work while studying in the United States?
                            </div>
                            <div className="collapse-content">
                                <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border border-base-300">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you work while studying in the United States?
                            </div>
                            <div className="collapse-content">
                                <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border border-base-300">
                            <input type="radio" name="faq-accordion" defaultChecked />
                            <div className="collapse-title text-lg md:text-xl font-medium">
                            Can you work while studying in the United States?
                            </div>
                            <div className="collapse-content">
                                <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <img src={faqImg} alt="faqimage" />
                </div>

            </div>
        </div>
    );
};

export default Faq;