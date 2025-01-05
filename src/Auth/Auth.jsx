import React from 'react';
import { useLocation } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const Auth = () => {


    const location = useLocation()
    const isRegisterRouter = location.pathname === '/auth/register';



    return (
        <div className=' backdrop-blur-sm lg:px-10 py-10'>
            <div className="hero bg-[#2A2515]   mx-auto rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-10">

                    <div className="carousel w-full lg:mx-5 h-64 sm:h-80 md:h-full rounded-2xl">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                className="w-full h-full object-cover rounded-2xl" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        {
                            isRegisterRouter ? <Register></Register> : <Login></Login>
                        }
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Auth;