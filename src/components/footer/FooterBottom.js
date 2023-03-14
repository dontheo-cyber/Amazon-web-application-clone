import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-7 gap-3 place-content-center text-gray-400'>
          {
            footerBottomItem.map((item)=>(
              <div className='group cursor-pointer' key={item._id}>
                <h3 className='footerBottomTitle'>{item.title}</h3>
                <p className='footerBottomText'>{item.des}</p>

              </div>
            ))
          }
        </div>
        <div className='w-full  flex flex-col gap-x-4 items-center justify-center py-10 '>
        <div className='flex flex-row gap-6'>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of use</p>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
          <p className='text-xs text-blue-600 font-bold hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
        </div>
         <p className='text-xs text-gray-600 font-bold mt-3'> @ 2000 - 2023, ReactBd.com, inc. or its affliates</p>

       </div>

      </div>
    </div>
  )
}

export default FooterBottom