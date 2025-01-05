import React from 'react';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { SiMaterialdesignicons } from 'react-icons/si';
import { Link } from 'react-router-dom';

const HomeSortedData = ({card}) => {
    const { _id, name, email, image, language, price, description,country } = card


    return (
        <div>
            <div className="card bg-slate-800  shadow-xl mt-5 mx-3 text-white">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" className='w-full h-60 rounded-b-xl' />

                </figure>

                <div className="card-body p-1 mt-2">
                    <h2 className="text-2xl gap-3 font-bold flex text-left items-center "> <span className='text-3xl'><IoPersonCircleSharp /></span> {name}</h2>
                    <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><SiMaterialdesignicons /></span> Langauge : {language}</h2>
                    <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><FaAcquisitionsIncorporated /></span> Country : {country}</h2>


                    <h3 className="text-left">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>

                    </h3>
                    {/*  */}

                    <div className="card-actions justify-between items-center">
                        <button className=" text-xl font-semibold">$ {price}</button>
                        <Link to={`/details/${_id}`}><button className="btn border-t-neutral-800  text-lg font-bold">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSortedData;