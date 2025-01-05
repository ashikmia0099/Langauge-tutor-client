import React, { useContext, useEffect, useState } from 'react';

import { IoLocationSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";

import { MdEmail } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';



const MyBookedTutors = () => {



    const { selectedTutor, setSelectedTutor, user } = useContext(AuthContext);
    const [bookedTutor, setBookedTutor] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/selected_tutor?Email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setBookedTutor(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [user.email]);




    const handleReviewStatus = (tutorId) => {
        fetch(`http://localhost:5000/review/${tutorId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to update review status');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Review status updated:', data);
                toast.success("Review Added Successfully");
            })
            .catch((error) => {
                console.error('Error updating review status:', error);
                toast.error("Failed to update review count!");
            });
    };
    





    return (

        <div className='mx-10'>
            <h1 className='text-3xl font-semibold my-10'> MY Total Booked Tutor : {bookedTutor.length}</h1>
            <div>
                {
                    bookedTutor.map((tutor, index, tutorId) =>

                        <div key={index}>
                            <div className='grid grid-cols-5 text-left border border-gray-300 rounded-xl items-center my-4'>
                                <div className=' col-span-1 '>
                                    <img src={tutor.Image} className='rounded-lg h-44 w-52 m-4' alt="" />
                                </div>
                                <div className=' col-span-3 ml-4'>
                                    <h2 className='text-2xl font-bold'>{tutor.Langaute}</h2>
                                    <div className='flex items-center gap-10'>
                                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoPersonCircleSharp /></span > <span className='text-lg '>Name: {tutor.Name}</span></h4>
                                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><MdEmail /></span > <span className='text-lg '>Email: {tutor.tutorEmail}</span></h4>
                                    </div>
                                    <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoLocationSharp /></span > <span className='text-lg '> Country: {tutor.Country} </span></h4>
                                    <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><FaDollarSign /></span > <span className='text-2xl '> {tutor.Price}</span></h4>

                                    <h5 className='text-lg mt-1 font-semibold '>
                                        Total Review : {tutor.Review}
                                    </h5>
                                    <h5 className='text-3xl mt-1 flex gap-5'>
                                        <button
                                            onClick={() => handleReviewStatus(tutor.tutorId)}
                                            className="btn btn-primary">
                                            Mark Reviewed
                                        </button>
                                        <ToastContainer className=' text-sm font-semibold' />

                                    </h5>
                                </div>
                                <div className=' col-span-1 space-y-2'>


                                    <br />
                                    <button className='btn w-24'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default MyBookedTutors;





