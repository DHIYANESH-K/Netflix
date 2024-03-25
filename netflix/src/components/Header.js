import React, {useEffect} from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  let dispatch=useDispatch();
  let navigate=useNavigate();
  let user=useSelector(store=>store.user);
  let showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName,photoURL}=user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
        } else {
            dispatch(removeUser());
            navigate("/")
        }
    });

    // unsubscribe when component unmounts;
    // return () => unsubcribe();
    },[])

  let handleClick=()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  let handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  let handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute h-20 text-white w-full px-16 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
        <img className='w-40' src={LOGO} alt="logo" />
        {user&&<div className='flex items-center gap-10'>
          {
            showGptSearch&&(<select onChange={handleLanguageChange} className="p-2 m-2 px-4 rounded-lg bg-gray-900 text-white">
            {
              SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
          </select>)
          }
          <button onClick={handleGptSearchClick} className='bg-purple-600 rounded-lg px-3 py-1 font-bold'>{showGptSearch?"Home Page":"Gpt Search"}</button>
          <div className='flex gap-2'>
          <img className="w-8 h-8" alt="user-Icon" src={user.photoURL}></img>
          <button onClick={handleClick} className='font-bold'>Sign Out</button>
          </div>
        </div>}
    </div>
  )
}

export default Header