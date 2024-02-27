import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <div className='absolute'>
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Bg-img"/>
        </div>
        <form className='absolute p-16 text-white w-4/12 bg-black my-36 mx-auto left-0 right-0 bg-opacity-80'>
            <h1 className='font-bold text-3xl'>{isSignInForm?"Sign In" :"Sign Up" }</h1>
            {!isSignInForm && ( <input type="text" placeholder="Full name" className='p-4 my-8 rounded-lg block w-full bg-gray-700'/>)}
            <input type="text" placeholder="Email Address" className='p-4 my-8 rounded-lg block w-full bg-gray-700'/>
            <input type="password" placeholder="Password" className='p-4 my-8 block w-full rounded-lg bg-gray-700'/>
            <button className='bg-red-700 p-4 my-8 rounded-lg w-full'>{isSignInForm?"Sign In" :"Sign Up" }</button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign In Now" :"Already registered? Sign Up Now" }</p>
        </form>
    </div>
  )
}

export default Login