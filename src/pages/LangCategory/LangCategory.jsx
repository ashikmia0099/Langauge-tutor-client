import React, { useContext } from 'react';
import { FaArrowRight, FaBuilding } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const LangCategory = ({language}) => {

    const { Learning, setLearning, filterData, setFilterData, SingleLanguge,handleFilterCard } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLangaugeFilter = () =>{
        handleFilterCard(language);
        navigate('/langugeFilterCard');
    }

    return (
        <div className='flex items-center border px-3 py-3 border-gray-100 mx-3 rounded-xl mt-4 justify-between'>
            <div className='text-left flex items-center space-x-2'>
                <div>
                    <FaBuilding className='text-gray-300 text-6xl' />
                </div>
                <div className=''>
                    <h1 className='text-white text-2xl font-bold'>{language}</h1>
                    <p className='text-white text-lg'>10000 teachers</p>
                </div> 

            </div>
            <div className='text-end'><Link onClick={handleLangaugeFilter}><FaArrowRight className='text-white text-4xl' /></Link></div>
        </div>
    );
    
};

export default LangCategory;