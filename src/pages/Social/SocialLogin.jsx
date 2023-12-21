

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {googleLogin} =useContext(AuthContext)
    const navigate = useNavigate()


    const handleSocialLogin =(media) => {
           media()
           .then (res =>{
            console.log(res)
            toast.success("Google Sign In Successfully")
            navigate('/')
        })
           .catch(err =>{
            console.log(err)
            toast.error(err.message)
           })
    }
    return (
        <div>
            <div className="divider">continue with</div>
        <div className="flex justify-around">
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-neutral btn-sm">Google</button>
            <button className="btn btn-neutral btn-sm">Github</button>
        </div>
        </div>
    );
};

export default SocialLogin;