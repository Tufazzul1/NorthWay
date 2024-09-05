import Banner from "../../Component/Banner";
import Blog from "../../Component/Blog";
import Faq from "../../Component/Faq";
import Study from "../../Component/Study";
import Career from "../../Component/Career";
import Cost from "../../Component/Cost";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Study></Study>
            <Career></Career>
            <Cost></Cost>
            <Faq></Faq>
            <Blog></Blog>
        </div>
    );
};

export default Home;