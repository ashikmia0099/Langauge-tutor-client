import React, { useContext } from 'react';
import bannerImg1 from '../../assets/bannerPageImage/banner1_1.avif';
import { FaLightbulb } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";

import { MdEmail } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyTutorialsCard = ({ tuturial }) => {




    const { _id, name, language, country, description, email, price, image } = tuturial;

    const { myTutuiral, setmyTutuiral } = useContext(AuthContext);



    const handleDelete = _id => {
        // console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://langauge-tutor-server.onrender.com/langauges/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tutor data has been deleted.",
                                icon: "success"
                            });
                            const remaining = myTutuiral.filter(tuturial => tuturial._id !== _id);
                            setmyTutuiral(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className='lg:grid lg:grid-cols-10 text-left border border-gray-300 rounded-xl items-center my-4'>
                <div className=' lg:col-span-2 '>
                    <img src={image} className='rounded-lg  h-full w-full lg:h-44 lg:w-52 lg:m-4' alt="" />
                </div>
                <div className=' lg:col-span-4 pl-4 lg:pl-0 md:my-5 lg:my-0'>
                    <h2 className='text-2xl font-bold mt-2 lg:mt-0'>{language} Langauge Tutor</h2>
                    <div className='md:flex items-center gap-10'>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoPersonCircleSharp /></span > <span className='text-lg '> {name}</span></h4>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><MdEmail /></span > <span className='text-lg '> {email}</span></h4>
                    </div>
                    <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoLocationSharp /></span > <span className='text-lg '> {country}</span></h4>
                    <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><FaDollarSign /></span > <span className='text-2xl '> {price}</span></h4>


                </div>
                <div className=' lg:col-span-3 overflow-y-auto h-32 mx-4'>
                    <h1 className='text-lg font-bold '>Description</h1>
                    <p className="py-4">{description}</p>
                </div>
                <div className=' lg:col-span-1 space-y-2 ml-5 lg:my-0 my-3 justify-between grid grid-cols-2 lg:grid-cols-1'>


                    <div className='col-span-1'>
                        <Link to={`/updatemytuturial/${_id}`}><button className='btn w-24'>Edit</button></Link>
                    </div>

                    <div className=' col-span-1'>
                        <button onClick={() => handleDelete(_id)} className='btn w-24 bg-red-500 text-white'>Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTutorialsCard;