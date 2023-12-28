import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)


    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const img = form.get('img');
        const password = form.get('password');

        // validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return
        }
        // creating a new user
        createUser(email, password)
            .then(res => {
                profileUpdate(name, img)
                    .then(() => {
                        console.log(res.user);
                        toast.success('User Created Successfully')
                        e.target.reset()
                        navigate('/')
                    })
            })
            .catch(err => {
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
                            <h1 className="text-white text-3xl font-bold">Register</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered bg-slate-200" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered bg-slate-200" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered bg-slate-200" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                        }

                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered bg-slate-200"
                                        name='password' />
                                </div>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;