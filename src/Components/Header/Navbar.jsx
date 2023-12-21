import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open,setOpen] = useState(false)

    return (
        <div className="w-full z-10 shadow-lg">

            <div className="max-w-screen-xl mx-auto px-5">
                <nav className="flex lg:justify-between justify-around items-center relative ">
                    <div className="flex items-center justify-between md:gap-8">
                        <div className="lg:hidden" onClick={() => setOpen(!open)}>
                            {open ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl"/>}
                        </div>
                        <img className="w-28 md:w-40" src="https://i.ibb.co/kVC7mPm/logo-events.png" alt="" />
                    </div>
                    <ul className={`lg:flex absolute lg:static  items-center gap-5 ${open ? "top-8 -left-10 px-5 bg-yellow-100 z-10" :"-top-40"}`}>
                        <li className="text-xl font-semibold px-3 my-3">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ?
                                        "text-2xl bg-slate-300 px-2 py-2 rounded-md font-semibold"
                                        :
                                        "hover:bg-slate-200 px-2 py-2 rounded-md"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-xl font-semibold px-3 my-3">
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ?
                                        "text-2xl bg-slate-300 px-2 py-2 rounded-md font-semibold"
                                        :
                                        "hover:bg-slate-200 px-2 py-2 rounded-md"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="text-xl font-semibold px-3 my-3">
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ?
                                        "text-2xl bg-slate-300 px-2 py-2 rounded-md font-semibold"
                                        :
                                        "hover:bg-slate-200 px-2 py-2 rounded-md"
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        {
                            user && <li className="text-xl font-semibold px-3 my-3">
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ?
                                            "text-2xl bg-slate-300 px-2 py-2 rounded-md font-semibold"
                                            :
                                            "hover:bg-slate-200 px-2 py-2 rounded-md"
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>
                        }
                    </ul>
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost text-black font-bold">Login</button>
                            </Link>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;