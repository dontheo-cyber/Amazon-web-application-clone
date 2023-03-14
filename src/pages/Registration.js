import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { darkLogo } from '../assets'
import {MdKeyboardArrowRight} from 'react-icons/md'




const Registration = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // Error message start

    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");

    // handle function start
    const handleName=(e)=>{
        setClientName(e.target.value)
        setErrClientName("")
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setErrEmail("")
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        setErrPassword("")
    }
    const handleCPassword=(e)=>{
        setCPassword(e.target.value)
        setErrCPassword("")
    }

    // Email validation starts here
    const emailValidation = (email)=>{
        return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+) *(\.\w{2,3})+$/);
    }


    // Submit button starts here
    const handleRegistration=(e)=>{
        e.preventDefault()
        if(!clientName){
            setErrClientName("Enter your name");
        }
        if(!email){
            setErrEmail("Enter your email");
        }else{
            if(!emailValidation(email)){
                setErrEmail("Enter a valid email")
            }
        }
        if(!password){
            setErrPassword("Enter your password");
        }else{
            if(password.length < 6){
                setErrPassword("password must be at least 6 characters");
            }
            if(!cPassword){
                setErrCPassword("Confirm your password")
            }else{
                if(cPassword !== password){
                    setErrCPassword("Password not matched")
                }
            }
        }
         if(clientName && email && emailValidation(email) && password && password.length >=6 && cPassword ===password ){
            console.log(clientName, email, password, cPassword)
            setClientName("")
            setEmail("")
            setPassword("")
            setCPassword("")
         }
        

    }
  return (
    <div className='w-full'>
        <div className='w-full bg-gray-100 pb-10'>
            <form className='w-[370px] mx-auto flex flex-col items-center'>
            <img className='w-32' src={darkLogo} alt='darkLogo'/>
            <div className='w-full border border-zinc-200 p-6'>
                <p className='font-titleFont text-2xl font-bold mb-4'>
                    Create Account</p>
             <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-bold'>Your name</p>
                    <input onChange={handleName} value={clientName} className='w-full  py-1 border border-zinc-400 px-2 
                text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="text"/>
                  {
                    errClientName && (
                        <p className='text-red-600 text-xs font-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base'>!</span>{errClientName}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-bold'>Email or Mobile Phone number</p>
                    <input onChange={handleEmail} value={email} className='w-full lowercase py-1 border border-zinc-400 px-2 
                     text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="email"/>
                  {
                    errEmail && (
                        <p className='text-red-600 text-xs font-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base'>!</span>{errEmail}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-bold'>Password</p>
                    <input onChange={handlePassword} value={password} className='w-full  py-1 border border-zinc-400 px-2 
                      text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="password"/>
                  {
                    errPassword && (
                        <p className='text-red-600 text-xs font-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base'>!</span>{errPassword}</p>
                    )
                  }
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-bold'>Re-enter password</p>
                    <input onChange={handleCPassword} value={cPassword} className='w-full  py-1 border border-zinc-400 px-2 
                      text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-textShadow duration-100' type="password"/>
                       {
                    errCPassword && (
                        <p className='text-red-600 text-xs font-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                            <span className='italic font-titleFont font-extrabold text-base'>!</span>{errCPassword}</p>
                    )
                  }
                       <p className='text-xs text-gray-600'>Password must be atleast 6 characters.</p>
                  
                </div>
                <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-bold rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]
                   hover:bg-gradient-t0-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
             </div>
             <p className='text-xs text-black font-bold leading-4 mt-4'>By creating an account you agree to amazon's <span className='text-blue-600'>Conditions of use {""} </span> 
                and  <span className='text-blue-600'>Privacy Notice.</span></p>

                 <div className=''>
                    <p className='flex flex-grow gap-2  text-xs text-black font-bold '>
                        Already have an account? {""} 
                        <Link to="/signin">
                        <span className=' flex flex-row  items-center text-xs text-blue-600 font-bold hover:text-orange-800 hover:underline underline-offset-1 cursor-pointer duration-100'>  Sign in
                         <span><MdKeyboardArrowRight/></span></span>
                        </Link>
                    </p>
                    <p className='text-xs text-black font-bold '>Buying for work? <span className='text-xs text-blue-600 font-bold hover:text-orange-800 hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span></p>
                 </div>
                
            </div>
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

export default Registration