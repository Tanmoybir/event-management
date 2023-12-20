import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../Components/Header/Navbar";




const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            </div>
        </div>
    );
};

export default MainLayout;