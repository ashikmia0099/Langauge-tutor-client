import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLightbulb } from "react-icons/fa";
import bannerImg1 from '../../assets/bannerPageImage/banner1_1.avif';
import bannerImg2 from '../../assets/bannerPageImage/banner1_2.jpg';
import bannerImg3 from '../../assets/bannerPageImage/banner1_3.webp';
import { FaBuilding } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { TbBuildingBank } from "react-icons/tb";
import { PiBuildingApartment } from "react-icons/pi";
import { LuUniversity } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const MyBookedTutorsCard = ({tutor}) => {


    
    

    const { _id, name, email, image, language, price, description, country} = tutor;


    return (
        <div>
            <div className='grid grid-cols-5 text-left border border-gray-300 rounded-xl items-center my-4'>
                <div className=' col-span-1 '>
                    <img src={image} className='rounded-lg h-44 w-52 m-4' alt="" />
                </div>
                <div className=' col-span-3 ml-4'>
                    <h2 className='text-2xl font-bold'>{language}</h2>
                    <div className='flex items-center gap-10'>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoPersonCircleSharp /></span > <span className='text-lg '>Name: {name}</span></h4>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><MdEmail /></span > <span className='text-lg '>Email: {email}</span></h4>
                    </div>
                    <h4 className='flex items-center text-xl font-semibold gap-2'> <span><IoLocationSharp /></span > <span className='text-lg '> Country: {country} </span></h4>
                    <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><FaDollarSign /></span > <span className='text-2xl '> {price}</span></h4>

                    <h5 className='text-lg mt-1 font-semibold '>
                    Total Review : 500
                    </h5>
                    <h5 className='text-3xl mt-1 flex gap-5'>
                    <Link><AiFillLike className='text-blue-500' /></Link> <span className='text-2xl font-semibold'>Like</span>
                    </h5>
                </div>
                <div className=' col-span-1 space-y-2'>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn w-24" onClick={() => document.getElementById('my_modal_5').showModal()}>Details</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    
                    <br />
                    <button className='btn w-24'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyBookedTutorsCard;