import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from '../utils/firebase'
import usericon from '../assets/Images/user-icon.jpg'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

 
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(isSignInForm, name?.current?.value? name.current.value : "invalid", email.current.value, password.current.value);
        //console.log(message);
        setErrorMessage(message);

        if(message) return;
        
        //sign up logic
        if(!isSignInForm && message===null){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: usericon
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid: uid, email: email, displayName: displayName, photoURL: photoURL
                        }));
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                console.log(user);
                console.log("Signed up");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-"+ errorMessage);
                    });
        }
        //sign in logic
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                console.log("Signed in");

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-"+ errorMessage);
            });

        }   
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
            alt="bg-img"/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}}
         className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && ( <input ref={name} type="text" placeholder="Full Name" 
            className="p-4 my-2 w-full h-10 rounded-sm bg-gray-700"/>)}
            <input ref={email} type="text" placeholder="Email Address" 
            className="p-4 my-2 w-full h-10 rounded-sm bg-gray-700"/>
            <input ref={password} type="password" placeholder="Password" 
            className="p-4 my-2 w-full h-10 rounded-sm bg-gray-700"/>
            <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
            <button className="p-2 my-6 bg-red-700 w-full h-12 rounded-sm" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix ? Sign Up Now" : "Already Registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login