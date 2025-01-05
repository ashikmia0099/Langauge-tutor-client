import React, { useContext, useState } from 'react';
import { FaDollarSign, FaLightbulb } from "react-icons/fa";



import { IoLocationSharp, IoPersonCircleSharp } from "react-icons/io5";

import { MdEmail } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const Details = () => {

    const { _id, name, email, image, language, price, description, country } = useLoaderData();

    const { selectedTutor, setSelectedTutor, user } = useContext(AuthContext);




    const handleSelectedData = () => {



        // akhane check kora hocce ai user age ai tutor ke select korche ki na
         
        

        const checkTutorSelected = selectedTutor.some(tutor => tutor.tutorEmail === email);

        if (checkTutorSelected) {
            toast.error('This Tutor Already Added ')
            return;

        }

        // akhane new data ke setSelectedTutor state a add kora hoice


        const tutorData =
        {
            tutorId: _id,
            Name: name,
            tutorEmail: email,
            Email: user.email,
            Langaute: language,
            Price: price,
            Country: country,
            Image: image,


        };


        fetch('https://langauge-tutor-server.onrender.com/selected_tutor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tutorData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSelectedTutor([...selectedTutor, tutorData]);
                    toast.success('Tutor added successfully');
                }
                else {
                    toast.error('Failed to add tutor');
                }
            })

    }





    return (
        <div>

            <div className='grid lg:grid-cols-2  my-10'>
                <div>
                    <img src={image} className='rounded-xl w-full h-full' alt="" />
                </div>

                <div className='text-left px-7 space-y-2 items-center justify-center pt-5'>
                    <h2 className='text-4xl font-bold'> {language} Langauge Tutor</h2>
                    <div className='flex items-center gap-10'>
                        <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><IoPersonCircleSharp /></span > <span className='text-2xl '> {name}</span></h4>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><MdEmail /></span > <span className='text-lg '>{email}</span></h4>
                    </div>
                    <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoLocationSharp /></span > <span className='text-lg '> {country}</span></h4>
                    <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><FaDollarSign /></span > <span className='text-2xl '> {price}</span></h4>


                    <div>
                        <button onClick={handleSelectedData} className='btn w-full mt-5 text-xl font-bold bg-red-500 text-white hover:bg-red-500'>Book Tutor</button>
                        <ToastContainer />
                    </div>

                    <div className="stats shadow w-full mt-6 hidden md:block">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Total Review</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>


                    </div>
                </div>

            </div>
            <div className='border-t border-stone-300'>
                <p className='my-10 mb-20 px-10 text-lg font-semibold'> {description} </p>
            </div>
        </div>
    );

};

export default Details;