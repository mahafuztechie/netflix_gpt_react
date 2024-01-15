import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate('/browse')
        } else {
          // User is signed out
          navigate('/')
          dispatch(removeUser());
        }
      });
      //Unsubscribe when the component unmounts
      return () => unSubscribe();
},[])
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className="w-44" src={LOGO} 
        alt="netflix-logo"/>
        { user && (<div className='flex p-2'>
          <img className="w-12 h-12" src={user?.photoURL} 
          alt="usericon"/>
          <button onClick={handleSignOut} className='font-bold text-white ml-2'>Sign Out</button>
        </div>)}
    </div>
   
  )
}

export default Header