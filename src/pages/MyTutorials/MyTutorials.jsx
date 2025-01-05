import React, { useContext, useEffect } from 'react';
import { FaLightbulb } from "react-icons/fa";

import { IoLocationSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";

import { MdEmail } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { key } from 'localforage';
import MyTutorialsCard from './MyTutorialsCard';

const MyTutorials = () => {

    const { user, setUser,myTutuiral, setmyTutuiral } = useContext(AuthContext);

    const {name, language, country, description, email, price, image} = myTutuiral;
    
    useEffect(()=>{
        fetch(`https://langauge-tutor-server.onrender.com/langauges?email=${user.email}`)
        .then(res => res.json())
        .then(data => setmyTutuiral(data))
    },[user.email])


    return (
        <div>
            
            <div>
                {
                    myTutuiral.map(tuturial =><MyTutorialsCard key={tuturial._id} tuturial={tuturial}></MyTutorialsCard> )
                }
            </div>
            
            
        </div>
    );
};

export default MyTutorials;