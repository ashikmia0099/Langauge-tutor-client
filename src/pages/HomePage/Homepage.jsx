import React, { useContext } from 'react';
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


import { IoPersonCircleSharp } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaCoins } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BannerCard from '../BannerCard/BannerCard';
import { Link } from 'react-router-dom';
import LangCategory from '../LangCategory/LangCategory';




const Homepage = () => {



    const { Learning, setLearning, filterData, setFilterData, SingleLanguge,handleFilterCard } = useContext(AuthContext)



    return (
        <div>
            {/* section 1 */}


            <div className='grid md:grid-cols-2 bg-black'>
                <div className='space-x-10  items-center  mt-20'>
                    <h1 className='md:text-4xl font-bold sm:text-3xl my-5 text-white'>Become fluent in any language </h1>
                    <ul className='p-3'>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Take customizable 1-on-1 lessons trusted by millions of users</li>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Learn from certified teachers that fit your budget and schedule</li>
                        <li className='flex items-start md:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Connect with a global community of language learners</li>

                    </ul>
                    <div className=' lg:text-left my-9'>
                        <Link to={'/findTutors'}><button className='btn px-10 bg-red-500 text-white font-semibold text-lg hover:bg-orange-400'>Start Now</button></Link>

                    </div>
                </div>
                <div className='my-20 mx-10'>
                    <img src={bannerImg3} className='' alt="" />
                </div>
            </div>



            {/* section 2 */}

            <div className='bg-[#181A1B] py-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4  text-white'>
                    <div className='mt-2'>
                        <h4 className='text-4xl font-bold'>50,000+</h4>
                        <p className='text-lg font-semibold'>Experienced tutors</p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-4xl font-bold'>150+</h4>
                        <p className='text-lg font-semibold'>Tutor nationalities</p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-4xl font-bold'>120+</h4>
                        <p className='text-lg font-semibold'>Subjects taught</p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-4xl font-bold'>50,000+</h4>
                        <p className='text-lg font-semibold'>5-star tutor reviews</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-6 mt-14 '>
                    {SingleLanguge.slice(0, 9).map((language, index) => (
                        <LangCategory key={index} language={language}></LangCategory>
                    ))}
                </div>
            </div>

            {/* section 3 */}

            <div className='bg-[#181A1B] py-10'>
                <h1 className='text-white  md:text-5xl font-bold 3xl '>See Our Professonal Teacher</h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-16 '>
                    {
                        Learning.slice(0, 6).map(learn => <BannerCard key={learn._id} learn={learn}></BannerCard>)
                    }


                </div>
            </div>


            {/* section 4 */}

            <div className='lg:grid lg:grid-cols-2 bg-[#1E293B] py-14'>
                <div className='mx-10'>
                    <img src={bannerImg1} alt="" className='h-96' />
                </div>
                <div className='text-white mt-6 lg:mt-0 mx-5 text-center  lg:text-left'>
                    <h1 className=' text-4xl lg:text-7xl font-bold text-red-300 lg:w-2/3'>Become A Tutor</h1>
                    <p className='mt-5 text-lg font-semibold my-5'>Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Preply.</p>
                    <ul>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Take customizable 1-on-1 lessons trusted by millions of users</li>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Learn from certified teachers that fit your budget and schedule</li>
                        <li className='flex items-start lg:items-center text-[#AFA89D] my-2 gap-3 font-semibold'><span><FaLightbulb className='text-red-400' /></span>Connect with a global community of language learners</li>

                    </ul>

                    <Link to={'/findTutors'}><button className='btn my-5 w-full hover:bg-red-500 bg-red-500 border-none text-white text-xl gap-10'><span>Become A tutor</span> <span> <FaArrowRight className='text-4xl' /> </span> </button></Link>

                </div>
            </div>


        </div>
    );
};

export default Homepage;