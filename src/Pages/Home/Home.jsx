import Banner from "../../Component/Banner";
import Blog from "../../Component/Blog";
import Faq from "../../Component/Faq";
import Study from "../../Component/Study";
import Career from "../../Component/Career";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Study></Study>
            <Career></Career>
            <Faq></Faq>
            <Blog></Blog>
        </div>
    );
};

export default Home;