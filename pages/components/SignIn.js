import React, { useState } from 'react'

function SignIn (props){


    return (
    <div className="bg-black rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className='p-3 text-3xl font-bold text-pink-400'></h2>
        <div className='inline-block  justify-center w-20 border-blue-400 border-solid'></div>
        <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In</h3>


        <div className='flex flex-col items-center'>
            <input type="email" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
            <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
            <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
                Sign In
            </button>
        </div>


        <div className='inline-block border-[1px] justify-center w-20 border-blue-400 border-solid'></div>
        <p className='text-blue-400 mt-4 text-sm'>Don't Have an Account?</p>
        <p className='text-blue-400 mt-4 text-sm font-medium cursor-pointer' onClick={() => props.setIsLoggedIn(false)}>Create an Account?</p>



    </div>
    )   
}

export default SignIn