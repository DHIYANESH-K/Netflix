import React, {useEffect} from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  let dispatch=useDispatch();
  let navigate=useNavigate();
  let user=useSelector(store=>store.user);
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
  return (
    <div className='absolute h-20 text-white w-full px-16 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-40' src={LOGO} alt="logo" />
        {user&&<div className='flex items-center gap-2'>
          <img className="w-8 h-8" alt="user-Icon" src={user.photoURL}></img>
          <button onClick={handleClick} className='font-bold'>Sign Out</button>
        </div>}
    </div>

  )
}

export default Header