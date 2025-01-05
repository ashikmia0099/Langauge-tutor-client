import React, { useContext, useState } from 'react';
import { FaApple, FaEyeSlash, FaFacebook, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {


    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/findTutors';

    const {user, setUser,SignInWithGoogle,SignInWithEmailPassword} = useContext(AuthContext)

    // sing in with google

    const handlegoogleSignIn = () =>{
        SignInWithGoogle()
        .then((result) =>{
            const user = result.user;
            setUser(user);
            
            navigate(from);
            // console.log(user)

        })
        .catch((error) =>{
            // console.log('ERROR', error)
            return('ERROR', error)
        })
    }


    // sign in with email and password

    const handleEmailSignIn = e =>{
        e.preventDefault();


        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignInWithEmailPassword(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            navigate(from);
            // console.log(user);
        })
        .catch((error) =>{
            // console.log('Error', error)
            return('Error', error)
        })

        // console.log('Sing in with email', email, password)
        return('Sing in with email', email, password)
    }


    return (
        <div className="card mx-auto items-center justify-center  w-full max-w-sm shrink-0 shadow-2xl col-span-1">
        <div className='lg:mx-5 lg:my-4'>
            <div className='text-left '>
                <h1 className='text-2xl font-semibold text-white'>Login Your Account</h1>
                <p className=' font-semibold text-gray-400 mt-4'>Don't have an account? <span className='text-white text-lg'><Link to='/auth/register'>Register</Link></span> </p>
            </div>

        </div>
        <form onSubmit={handleEmailSignIn} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white font-semibold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
                <label className="label">
                    <span className="label-text text-white font-semibold">Password</span>
                </label>
            
                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                <button onClick={() => setShowPassword(!showPassword)} className=' absolute right-4 text-xl top-12'>{showPassword ? <FaRegEye/> : <FaEyeSlash/> }</button>
               
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-white hover:text-white">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6 mb-4">
                <button className="btn bg-black border-none text-[#A4DBC1] text-xl font-semibold w-72 hover:rounded-full hover:bg-[#6b9481] hover:text-black">Login</button>
            </div>
            <div className=' md:flex  gap-4 '>
                <button className='btn mt-2 mx-2' onClick={handlegoogleSignIn}> <FcGoogle /> Google</button>
                <button className='btn mt-2 mx-2'><FaFacebook className='text-[#005EFF]' />Facebook</button>
                <button className='btn mt-2 mx-2'> <FaApple /> Apple</button>
            </div>
        </form>
    </div>
    );
};

export default Login;