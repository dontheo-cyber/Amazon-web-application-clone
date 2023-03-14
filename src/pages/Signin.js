import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { darkLogo } from '../assets'
import {MdKeyboardArrowRight} from 'react-icons/md'





const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error message starts here
  const [errEmail, setErrEmail] = useState("")
  const [errPassword, setErrPassword] = useState("")

// Handle function starts here
  const handleEmail=(e)=>{
     setEmail(e.target.value);
     setErrEmail("");
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrPassword("");
  }
   
  // Form validation starts here
  const handleLogin = (e)=>{
    e.preventDefault()
    
    if(!email){
      setErrEmail("Enter your email")
    }
    if(!password){
      setErrPassword("Enter your password")
    }
    if (email && password){
      console.log(email, password)
      setEmail("")
      setPassword("")
    }
  }



  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10 '>
        <form className='w-[370px] mx-auto flex flex-col items-center'>
          <img className='w-32' src={darkLogo} alt='darkLogo'/>
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-bold'>Email or Mobile Phone Number</p>
                <input onChange={handleEmail} value={email}  className='w-full  py-1 border border-zinc-400 px-2 
                text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="email"/>
                 {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center'><span className='italic font-titleFont font-extrabold text-base'> ! </span>
                    {errEmail}

                    </p>
                  )
                 }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-bold'>Password</p>
                <input onChange={handlePassword} value={password}
                 className='w-full lowercase py-1 border border-zinc-400 px-2 
                text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="password"/>
                {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center'><span className='italic font-titleFont font-extrabold text-base'> ! </span>
                    {errPassword}

                    </p>
                  )
                 }
              </div>
              <button onClick={handleLogin} className='w-full py-1.5 text-sm font-bold rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]
               hover:bg-gradient-t0-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
            </div>
             <p className='text-xs text-black font-bold leading-4 mt-4'>By Continuing you agree to amazon's <span className='text-blue-600'>Conditions of use {""} </span> 
                and  <span className='text-blue-600'>Privacy Notice.</span></p>
                <p className='flex flex-row items-center text-xs text-gray-600 cursor-pointer font-bold mt-4 group'><MdKeyboardArrowRight/>
                <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
          </div>
           <div className='w-full text-xs text-gray-600 mt-4 flex items-center font-bold'>
             <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
             <span className='w-1/3 text-center '>New to Amazon ?</span>
             <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
           </div>
            <Link className='w-full' to="/registration" >
            <button  className='w-full py-2 mt-4 text-sm font-bold rounded-sm
             bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
              Create your Amazon account</button>
            </Link>
        </form>
      </div>
       <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-x-4 items-center justify-center py-10 '>
        <div className='flex flex-row gap-6'>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of use</p>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
        </div>
         <p className='text-xs text-gray-600 font-bold mt-3'> @ 2000 - 2023, ReactBd.com, inc. or its affliates</p>

       </div>
    </div>
  )
}

export default Signin