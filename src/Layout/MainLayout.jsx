import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Header/Navbar";
import Footer from "../pages/Footer/Footer";




const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Toaster></Toaster>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;