import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../AuthProvider/AuthProvider';
import TheamContoler from './TheamContoler';

const Navbar = () => {

    const { user, setUser, LogOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const links = <>


        <div>
            {
                user && user?.email ? (
                    <div className='flex'>
                        <NavLink ><li className='text-md font-semibold'><a>Home</a></li></NavLink>
                        <NavLink to={'/findTutors'}><li className='text-md font-semibold'><a>Find tutors</a></li></NavLink>
                        <NavLink to={'/addtutorials'}><li className='text-md font-semibold'><a> Add Tutorials</a></li></NavLink>
                        <NavLink to={'/myTutorials'}><li className='text-md font-semibold'><a>My Tutorials</a></li></NavLink>
                        <NavLink to={'/myBookedTutors'}><li className='text-md font-semibold'><a>My booked tutors</a></li></NavLink>

                    </div>
                ) : (
                    <div className='flex'>
                        <NavLink ><li className='text-md font-semibold'><a>Home</a></li></NavLink>
                        <NavLink to={'/findTutors'}><li className='text-md font-semibold'><a>Find tutors</a></li></NavLink>
                        <NavLink to={'/findTutors'}><li className='text-md font-semibold'><a>About Us</a></li></NavLink>
                        <NavLink to={'/findTutors'}><li className='text-md font-semibold'><a>Contract Us</a></li></NavLink>
                    </div>
                )
            }
        </div>



    </>

    // handle Logout

    const handleLogout = () => {
        LogOut()
            .then(() => {
                navigate("/auth/login")
            })
            .catch((error) => {
                console.log('Error', error)
            })
    }


    return (

        <div className="navbar bg-base-100 grid grid-cols-10">
            <div className=" col-span-1 navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}><a  className="btn btn-ghost text-xl">daisyUI</a></Link>
            </div>
            <div className="col-span-7 items-center navbar-center">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="col-span-2 ">
                <div className=' mr-3'>
                   
                </div>
                <TheamContoler></TheamContoler>

                {
                    user && user?.email ? (
                        <div className="navbar-end space-x-4 flex items-center">
                            <div className="dropdown dropdown-hover">
                                <div>
                                    {
                                        user?.photoURL ? (
                                            <img src={user.photoURL} alt="User Profile" className="h-8 w-8 rounded-full" />
                                        ) : (
                                            <CgProfile tabIndex={0} className="h-8 w-8" />
                                        )
                                    }

                                </div>


                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 shadow left-0">
                                    <li><h3><span className='font-bold'>Name:</span> {user.displayName}</h3></li>
                                    <li><h3><span className='font-bold'>email:</span> {user.email}</h3></li>

                                </ul>
                            </div>
                            <NavLink onClick={handleLogout}><a className="text-md font-semibold">Logout</a></NavLink>
                        </div>

                    ) : (
                        <div className="navbar-end space-x-4 flex items-center">
                            <div>
                                <NavLink to={'/auth'}><a className="text-md font-semibold">Login</a></NavLink>
                            </div>

                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;