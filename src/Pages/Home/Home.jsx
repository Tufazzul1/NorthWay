import Banner from "../../Component/Banner";
import Blog from "../../Component/Blog";
import Faq from "../../Component/Faq";
import Study from "../../Component/Study";
import Career from "../../Component/Career";
import Cost from "../../Component/Cost";
import Univercities from "../../Component/Univercities";
import Application from "../../Component/Application";
import Glance from "../../Component/Glance";
import Review from "../../Component/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Application></Application>
            <Study></Study>
            <Career></Career>
            <Univercities></Univercities>
            <Cost></Cost>
            <Glance></Glance>
            <Review></Review>
            <Faq></Faq>
            <Blog></Blog>
        </div>
    );
};

export default Home;