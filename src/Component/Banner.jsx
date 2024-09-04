import BannerImg from "../assets/banner.jpeg";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-[300px] flex justify-around items-center bg-fixed"
            style={{ backgroundImage: `url(${BannerImg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 md:flex md:justify-around w-full text-center">
                <h3 className="text-4xl text-white font-bold">Study In USA</h3>
                <p className="text-white">Home / Study In USA</p>
            </div>
        </div>
    );
};

export default Banner;

