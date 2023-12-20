import Banner from "../../Components/Header/Banner";
import Cards from "./Cards";
import Services from "./Services";
import WelCome from "./WelCome";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <WelCome></WelCome>
           <Services></Services>
           <Cards></Cards>
        </div>
    );
};

export default Home;