import React, { useEffect } from 'react'
import {FiMenu} from  "react-icons/fi"
import {AiOutlineClose} from  "react-icons/ai"
import {MdAccountCircle, } from  "react-icons/md"
import {useRef, useState } from "react"
import SideNavContent from './SideNavContent'

const HeaderBottom = () => {
    const ref=useRef();
    const [sideNav, setSideNav] = useState(false)
    useEffect(()=>{
      document.body.addEventListener("click", (e)=>{
       if(e.target.contains(ref.current)){
        setSideNav(false)
       }
      })
    },[ref,sideNav])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_blue text-white flex items-start'>
        <div>
            {/* ========= Listitems start here =========== */}
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={()=>setSideNav(true)} className='headerHover flex items-center gap-1'><FiMenu/> All </li>
                <li className='headerHover hidden md:inline-flex'> Today's Deals</li>
                <li className='headerHover hidden md:inline-flex'> Customer Service </li>
                <li className='headerHover hidden md:inline-flex'> Gift Cards </li>
                <li className='headerHover hidden md:inline-flex'> Registry </li>
                <li className='headerHover hidden md:inline-flex'> Sell </li>
                
            </ul>
            {/* ========= Listitems ends here =========== */}
            {/* ========= SideNav start here =========== */}
              {
                sideNav && (
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                        <div className='w-full h-full relative'>
                            <div ref={ref} className='w-[80%] md:w-[350px] h-full bg-white border border-black '>
                                <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                    <MdAccountCircle/>
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                        Hello, Sign In</h3>
                               </div>
                                <div>
                                 <SideNavContent
                                  title="Digital Content & Devices" 
                                  one="Amazon Music"
                                  two="Kindle E-readers & Books"
                                  three="Amazon Appstore"
                                  />
                                 <SideNavContent
                                  title="Shop By Department" 
                                  one="Electronics"
                                  two="Computers"
                                  three="Smart Home"
                                  />
                                 <SideNavContent
                                  title="Programs & Features" 
                                  one="Gifts Cards"
                                  two="Amazon Live"
                                  three="International Shopping"
                                  />
                                 <SideNavContent
                                  title="Help & Settings" 
                                  one="Your Account"
                                  two="Customer Service"
                                  three="Contact Us"
                                  />
                                 </div>
    
                             
                               <span onClick={()=>setSideNav (false)} 
                                className='cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300 '>
                                <AiOutlineClose/>
                                </span>
                            </div>
                        </div>
    
                    </div>
                 )
            }



            {/* ========= SideNav ends here =========== */}
            {/* ========= Listitems start here =========== */}
            {/* ========= Listitems start here =========== */}
        </div>
      </div>
  )
}

export default HeaderBottom