import React, { useEffect, useRef } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useRef("en");
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = () => {
    //toggle gpt search
    console.log(language.current.value);
    dispatch(changeLanguage(language.current.value));
  }
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
    <div className='absolute flex flex-col md:flex-row md:justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO} 
        alt="netflix-logo"/>
        { user && (<div className='flex p-2 justify-between'>
         {showGptSearch &&
          <select ref={language} onClick={handleLanguageChange} className='p-2 bg-gray-900 text-white my-1 h-12 rounded-lg'>
              {SUPPORTED_LANGUAGES.map(lang => 
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )}
          </select>}
          <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 bg-purple-500 text-white rounded-lg h-12'>{showGptSearch ? "Home Page" : "GPT Search"}</button>
          <img className="w-12 h-12 rounded-lg hidden md:block" src={user?.photoURL} 
          alt="usericon"/>
          <button onClick={handleSignOut} className='font-bold text-white ml-2'>(Sign Out)</button>
        </div>)}
    </div>
   
  )
}

export default Header