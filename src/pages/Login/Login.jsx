import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
const {signIn} =useContext(AuthContext)
const navigate = useNavigate()


const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    
    // validation
    if (password < 6){
        toast.error('Password must be at least 6 characters');
        return
    }
    // creating a new user
        signIn(email,password)
        .then(res =>{
            console.log(res.user)
            toast.success('User logged in Successfully')
            navigate('/')
        })
        .catch(err =>{
            console.log(err)
            toast.error(err.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center bg-black mx-2 py-6 rounded-lg">
                            <h1 className="text-white text-3xl font-bold">Login</h1>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered bg-slate-200" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered bg-slate-200" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;