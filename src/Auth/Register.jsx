import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({}); 
    const [passwordLength, setPasswordLength] = useState(''); 
    const navigate = useNavigate();

    const { user, setUser, RegisterWithEmailPassword, LogOut, updateUserProfile } = useContext(AuthContext);

    const handelSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 6) {
            setError({ ...error, name: 'Name must have at least 6 characters.' });
            return;
        }

        const photourl = form.get('photourl');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 8) {
            setPasswordLength('Password should be at least 8 characters.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordLength('Must have at least one uppercase, one lowercase, one number, and one symbol.');
            return;
        }

        RegisterWithEmailPassword(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL: photourl });
                return LogOut();
            })
            .then(() => {
                navigate('/auth/login');
            })
            .catch((err) => {
                let errorMessage;
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'This email is already in use.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'Password must be at least 6 characters.';
                        break;
                    default:
                        errorMessage = 'Something went wrong. Please try again.';
                }
                setError({ ...error, firebase: errorMessage });
            });
    };

    return (
        <div className="card mx-auto items-center justify-center w-full max-w-sm shrink-0 shadow-2xl col-span-1">
            <div className="mx-5 my-4">
                <div className="text-left">
                    <h1 className="text-3xl font-semibold text-white">Register Your Account</h1>
                    <p className="font-semibold text-gray-400 mt-4">
                        Already have an account?{' '}
                        <span className="text-white text-lg">
                            <Link to="/auth/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
            <form onSubmit={handelSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                {error.name && <label className="label text-red-500">{error.name}</label>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-xl top-12"
                    >
                        {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                </div>
                {error.firebase && <label className="label text-red-500">{error.firebase}</label>}
                {passwordLength && <label className="label text-red-500">{passwordLength}</label>}
                <div className="form-control mt-6 mb-4">
                    <button className="btn bg-black border-none text-[#A4DBC1] text-xl font-semibold w-72 hover:rounded-full hover:bg-[#6b9481] hover:text-black">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
