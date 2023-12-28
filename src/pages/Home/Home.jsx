import Banner from "../../Components/Header/Banner";
import Cards from "./Cards";
import Services from "./Services";
import WelCome from "./WelCome";


const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto px-5">
                <WelCome></WelCome>
                <Services></Services>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Home;