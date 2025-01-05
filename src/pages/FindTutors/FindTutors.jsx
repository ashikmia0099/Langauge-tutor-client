import React, { useContext, useEffect, useState } from 'react';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { SiMaterialdesignicons } from 'react-icons/si';
import bannerImg1 from '../../assets/bannerPageImage/banner1_1.avif';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import FindTutorCard from './FindTutorCard';


const FindTutors = () => {



    const { Learning, setLearning, filterData, setFilterData, SingleLanguge, handleFilterCard } = useContext(AuthContext)
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        setFilterData([]);

    }, []);

    const allData = () => {

        setFilterData(Learning);


    }


    const handleSearch = () => {

        if (searchInput.trim() === '') {
            setFilterData(Learning);
        }
        else {
            const search = Learning.filter((item) =>
                item.language.toLowerCase().includes(searchInput.toLowerCase())

            );
            setFilterData(search)
        }



    }






    return (
        <div className='lg:grid lg:grid-cols-10 bg-[#181A1B]'>


            <div className=' col-span-8'>
                <div className=' py-10'>
                    <div className='flex'>

                        <div className='ml-7 flex gap-7'>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" onChange={(e) => setSearchInput(e.target.value)} className="grow" placeholder="Search by langauge" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                            <button onClick={handleSearch} className='btn'>Search</button>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 px-3 mt-16 '>

                        {
                            filterData.length > 0 ?
                                filterData.map((card, index) => (
                                    <FindTutorCard key={`${card._id}-${index}`} card={card}></FindTutorCard>
                                ))
                                :
                                Learning.map((card, index) => (
                                    <FindTutorCard key={`${card._id}-${index}`} card={card}></FindTutorCard>
                                ))

                        }

                    </div>
                </div>
            </div>
            <div className=' col-span-2 mt-20 mr-1 '>

                <div className='mt-24  border border-gray-300 py-10 rounded-lg h-[650px] '>
                    <h1 className='text-white font-semibold text-xl border-b border-gray-300 mb-2'>All Langauge</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 overflow-y-scroll max-h-full items-center">
                        <button onClick={allData} className="btn h-7 min-h-7 my-1 mx-1">All</button>
                        {SingleLanguge.map((language, index) => (
                            <button
                                key={index}
                                onClick={() => handleFilterCard(language)}
                                className="btn h-7 min-h-7 my-1 mx-1">
                                {language}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindTutors;