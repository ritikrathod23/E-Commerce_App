import React from 'react'
import MenImage from '../accest/MenImage.jpg'
import womenImage from '../accest/womenImage.jpg'
import mobile from '../accest/mobile.jpg'
import jwellery from '../accest/jwellery.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' overflow-x-scroll  lg:overflow-hidden justify-start items-start px-3 flex lg:justify-center lg:items-center bg-white shadow-md  h-28 md:gap-16 gap-6 mt-2'>
        <Link to={"/menpage"}>
        <div className='cursor-pointer ' >
            <div className='bg-gray-400 w-16 h-16 rounded-full '>
                <img className='object-cover w-full h-full rounded-full  ' src={MenImage} alt="no image" />  
            </div>
            <div className='text-center'>Men</div>
        </div>
        </Link>


        <Link to={'/womenswear'}>
        <div className='cursor-pointer ' >
            <div className='bg-grey-400 w-16 h-16 rounded-full  '> 
            <img className='object-cover w-full h-full rounded-full  ' src={womenImage} alt="no image" />  
            </div>
            <div className='text-center'>Women</div>
        </div>
        </Link>

        <Link  to={'/mobilespage'} >
        <div className='cursor-pointer ' >
            <div className='bg-gray-400 w-16 h-16 rounded-full  '>  
            <img className='object-cover w-full h-full rounded-full  ' src={mobile} alt="no image" />  
            </div>
            <div className='text-center'>Mobile</div>
        </div>
        </Link>

        <Link to={'/watches'}>
        <div className='cursor-pointer ' >
            <div className='bg-gray-400 w-16 h-16 rounded-full  '>  
            <img className='object-cover w-full h-full rounded-full  ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/f/2/-original-imagrdzghye4wtqq.jpeg?q=70" alt="no image" />  
            </div>
            <div className='text-center'>Watches</div>
        </div>
        </Link>
        <Link to={'/malefootwear'}>
        <div className='cursor-pointer flex flex-col justify-center items-center content-center ' >
            
            <img className='object-cover w-16 h-16 rounded-full  ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/q/g/j/6-svr6372kbrv-6-svaar-beige-original-imagthn6yyhnrbry.jpeg?q=70" alt="no image" />  
            
            <div className='text-center'>Male Footwear</div>
        </div>
        </Link>
        <Link to={'/femalefootwear'}>
        <div className='cursor-pointer flex flex-col justify-center items-center content-center ' >
          
            <img className='object-cover   w-16 h-16 rounded-full  ' src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/s/q/x/5-sl974womenflats-5-shoestail-black-original-imagxzgm2mbh7gxq.jpeg?q=70" alt="no image" />  
            <div className='text-center'>Female Footwear</div>
        </div>
        </Link>
        <Link to={'/books'}>
        <div className='cursor-pointer flex flex-col justify-center items-center content-center ' >
            
            <img className='object-cover w-16 h-16 rounded-full  ' src="https://rukminim2.flixcart.com/image/612/612/l0pm3680/regionalbooks/s/s/k/magic-practice-copybook-for-kids-4-pack-comfy-kid-handwriting-original-imagcfwhmg5ez7zz.jpeg?q=70" alt="no image" />  
            <div className='text-center'>Books</div>
        </div>
        </Link>
        
    </div>
  )
}

export default Header