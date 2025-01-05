import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';



export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [myTutuiral, setmyTutuiral] = useState([],)

    const [Learning, setLearning] = useState([])
    const [selectedTutor, setSelectedTutor] = useState([]);
    const [filterData, setFilterData] = useState(Learning)

    // All learning data fetch

    useEffect(() =>{
        fetch('https://langauge-tutor-server.onrender.com/langauges')
        .then(res => res.json())
        .then(data => setLearning(data))
    
    } , [])

   


    // sign in google

    const SignInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    };



    // register with email and password

    const RegisterWithEmailPassword = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password )
    };


    // signIN with email and password

    const SignInWithEmailPassword = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Sign Out

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    // update userprofile
    const updateUserProfile = (updatedData) =>{
        
        return updateProfile(auth.currentUser, updatedData);

    }



    // On auth observer


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser);
        //   console.log('state capture', currentUser)
          
          setLoading(false);
        })
    
        return () =>{
          unsubscribe();
        }
    
      } ,[])



    //   variavle 


    // sort by langauge

    const SingleLanguge = [...new Set(Learning.map((item) => item.language))]

    // akhane langauge filter ar onclick funcion dawa holo

    const handleFilterCard = (lang) =>{
        const filterCards = Learning.filter((tutor) => tutor.language === lang);
        setFilterData(filterCards)
    }




    const userInfo ={
        Learning,
        setLearning,
        SignInWithGoogle,
        loading,
        setLoading,
        setUser,
        user,
        RegisterWithEmailPassword,
        SignInWithEmailPassword,
        LogOut,
        selectedTutor, 
        setSelectedTutor,
        myTutuiral, 
        setmyTutuiral,
        filterData, 
        setFilterData,
        SingleLanguge,
        handleFilterCard,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;