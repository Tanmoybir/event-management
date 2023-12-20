import { Link } from "react-router-dom";


const ErrorPage = () => {
  
    
    return (
        <div className="max-w-screen-xl mx-auto px-5 mt-36">
       <div className="">
       <h2 className="text-red-400 text-9xl text-center font-bold">404</h2>
        <p className="text-center mt-4 text-4xl font-bold">That Page Are Not Found.</p> 
      <div className="flex justify-center mt-4">
             <Link to={"/"}><button className="bg-red-400 px-8 py-4 rounded-lg uppercase text-xl">Go To Home</button></Link>
    </div>
       </div>
        </div>
    );
};

export default ErrorPage;