
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {MdOutlineFavorite, MdShoppingCart, MdApi} from "react-icons/md"
import {AiFillStar} from "react-icons/ai"
import {BsArrowRightCircleFill} from "react-icons/bs"

const Products = () => {
  const data = useLoaderData()
  const productData = data.data;
  console.log(data)
    
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4'>
      {
        productData.map((item)=>(
          <div key={item.id } className='bg-white h-auto border-[1px] border-gray-200 py-8 z-3 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative'>
            <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
            <div className='w-full h-auto flex items-center justify-center relative group'>
            <img className='w-52 h-64 object-contain' src={item.image} alt="productImg"/>
             <ul className='w-full h-36 bg-gray-100 absolute bottom-[-175px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700'>
              <li className='flex flex-row productLi'>Compare{""} <span><MdApi/></span></li>
              <li className='flex flex-row productLi'>Add to Cart{""} <span><MdShoppingCart/></span></li>
              <li className='flex flex-row productLi'>View Details{""} <span><BsArrowRightCircleFill/></span></li>
              <li className='flex flex-row productLi'>Add to Wish List{""} <span><MdOutlineFavorite/></span></li>
             </ul>
             
            </div>
             <div className='px-4 z-10 bg-white'>
             <div className='flex items-center justify-between'>
              
              <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-medium '>
                {item.title.substring(0,20)}</h2>
              <p className=''>${item.price}</p>
            
           </div>
            <div>
              <p className='text-sm'>{item.description.substring(0, 100)}...</p>
            </div>
             <div className='flex flex-row text-yellow-500'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
             </div>
              <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
             </div>
          </div>
          
        ))
      }
    </div>
  )
}

export default Products