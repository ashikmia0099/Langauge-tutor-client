

import { useContext } from 'react';
import FindTutorCard from '../FindTutors/FindTutorCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import HomeSortedData from './HomeSortedData';


const LangugeFilterCard = () => {
    const { filterData, Learning } = useContext(AuthContext);
    const { language } = Learning;


    return (
        <div>
            <h1 className='text-4xl font-bold mt-5'>Total Available Card : {filterData.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-16 my-10 mb-20'>
                {filterData.length > 0
                    ? filterData.map((card, index) => (
                        <HomeSortedData key={`${card._id}-${index}`} card={card}></HomeSortedData>
                    ))
                    : Learning.map((card, index) => (
                        <HomeSortedData key={`${card._id}-${index}`} card={card}></HomeSortedData>
                    ))}
            </div>
        </div>
    );
};

export default LangugeFilterCard;
