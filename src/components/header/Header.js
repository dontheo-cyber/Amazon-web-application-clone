import React, { useState } from 'react';
import { logo } from '../../assets/index';
import {ImLocation2, ImSearch} from "react-icons/im";
import {MdArrowDropDown, } from "react-icons/md";
import {FaShoppingCart} from "react-icons/fa";
import { listItems } from '../../constants';
import HeaderBottom from '../HeaderBottom';
import  {Link} from 'react-router-dom';


const Header = () => {
  const [showAll, setShowAll] = useState(false)
  

   
  return (
    <div className="w-full sticky top-0 z-50 ">
        <div className=' bg-amazon_blue text-white px-4 py-3 mx-auto flex items-center gap-4'>
            {/* """"""""""Image starts here""""""""""""" */}
            <div className='headerHover'>
                <img className='w-24 mt-2' src={logo} alt="logo"/>
            </div>
        {/* """"""""""Image ends here""""""""""""" */}
        {/* """"""""""Deliver starts here""""""""""""" */}
        <div className='headerHover hidden mdl:inline-flex'>
            <ImLocation2/>
            <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold mt-1 text-whiteText'>Africa</span></p>
        </div>

        {/* """"""""""Deliver ends here""""""""""""" */}
        {/* """"""""""Search starts here""""""""""""" */}
        <div className='h-10 rounded-md hidden lgl:flex flex-grow relative '>
          <span onClick={()=>setShowAll(!showAll)} className='px-2 flex flex-row items-center gap-2 w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont justify-center rounded-tl-md rounded-bl-md'>All <span><MdArrowDropDown/></span>
          </span>
           {showAll && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0  overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                  
                  {
                    listItems.map((item)=>(
                      <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title }</li>
                    ))
                    
                    
          
                  }
                 
                </ul>
              </div>
             )
           }
            <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type="text"/>
             <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg[#3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'> 
              <ImSearch/></span>
        </div>
        {/* """"""""""Search ends here""""""""""""" */}
        {/* """"""""""Signin starts here""""""""""""" */}
        <Link to="/Signin">
        <div className='flex flex-col items-center justify-center headerHover'>
          <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, Sign In </p>
          <p className='hidden mdl:inline-flex flex-row items-center gap-2 text-sm font-semibold -mt-1 text-whiteText '>Accounts & Lists{""} 
          <span><MdArrowDropDown/></span></p>
        </div>
        </Link>

        {/* """"""""""Signin ends here""""""""""""" */}
        {/* """"""""""Orders starts here""""""""""""" */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>

        {/* """"""""""Orders ends here""""""""""""" */}
        {/* """"""""""Cart starts here""""""""""""" */}
         <Link to="/home">
         <div className='flex items-start first-letter:justify-center headerHover relative'>
          <FaShoppingCart/>
          <p className='text-xs font-semibold mt-3 text-whiteText'> Cart 
          <span className='absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center' >0</span> </p>
          
        </div>
         </Link>

        {/* """"""""""Cart ends here""""""""""""" */}

        
        
        </div>
        <HeaderBottom/>

       
    </div>
  )
}

export default Header