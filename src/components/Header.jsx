import React from 'react'
import MenImage from '../accest/MenImage.jpg'
import womenImage from '../accest/womenImage.jpg'
import mobile from '../accest/mobile.jpg'
import jwellery from '../accest/jwellery.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-center items-center bg-white shadow-md  h-28 md:gap-16 gap-6 mt-2'>
        <Link to={"/menpage"}>
        <div className='cursor-pointer ' >
            <div className='bg-green-400 w-16 h-16 rounded-full '>
                <img className='object-cover w-full h-full rounded-full  ' src={MenImage} alt="no image" />  
            </div>
            <div className='text-center'>Men</div>
        </div>
        </Link>


        <Link to={'/women'}>
        <div className='cursor-pointer ' >
            <div className='bg-grey-400 w-16 h-16 rounded-full  '> 
            <img className='object-cover w-full h-full rounded-full  ' src={womenImage} alt="no image" />  
            </div>
            <div className='text-center'>Women</div>
        </div>
        </Link>

        <Link  to={'/mobilespage'} >
        <div className='cursor-pointer ' >
            <div className='bg-green-400 w-16 h-16 rounded-full  '>  
            <img className='object-cover w-full h-full rounded-full  ' src={mobile} alt="no image" />  
            </div>
            <div className='text-center'>Mobile</div>
        </div>
        </Link>

        <Link to={'/jwellery'}>
        <div className='cursor-pointer ' >
            <div className='bg-green-400 w-16 h-16 rounded-full  '>  
            <img className='object-cover w-full h-full rounded-full  ' src={jwellery} alt="no image" />  
            </div>
            <div className='text-center'>Jwellery</div>
        </div>
        </Link>
        
    </div>
  )
}

export default Header