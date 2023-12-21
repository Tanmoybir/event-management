import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SocialLogin from "../pages/Social/SocialLogin";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactUs from "../pages/Contact/ContactUs";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoute from "../PrivateRorte/PrivateRoute";


const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('service.json')
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/",
                element: <SocialLogin></SocialLogin>
            },
            {
                path:"/services/:id",
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:() => fetch('service.json')
            },
            {
                path:"/contact",
                element:<ContactUs></ContactUs>
            },
            {
                path:"/gallery",
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>,
                loader:() => fetch("gallery.json")
            }
            
        ]
    }
])

export default myCreateRoute;