import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Parchase from '../components/Parchase';
import { Link } from 'react-router-dom';

import { MdDeleteOutline } from "react-icons/md";
import { deleteItem, addQty, deleteQty } from '../redux/actions';

function Cart() {
    // const [cart, setCart] = useState(false)
    const dispatch = useDispatch();
    // const [itemCounter, setItemCounter ] = useState(1);
    const items  = useSelector(state => state);
    const data = items.cart
    const len = data.length;
   
    console.log("data ", data )
    useEffect(() => {},[data])

if(len  === 0){
    return (
    <div className='flex justify-center flex-col gap-6 items-center text-center text-3xl mt-28'>
        No cart available, Please add
        <Link to={'/mobilespage'} className='block' >
            <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-40 py-4 hover:bg-gray-700' >
            Shop
            </button>
        </Link>
    </div>)
}
else {
  return (
    <>
            {/* <!-- component --> */}
        <div class="flex flex-col md:flex-row w-screen h-full sm:px-14  px-4 py-7">

            {/* <!-- My Cart --> */}
          
            <div class="w-full  flex flex-col h-fit gap-4 p-4 ">
                <p class="text-blue-900 text-xl font-extrabold">My cart</p>

                {/* <!-- Product --> */}
                { data && data.map((item, index) => (
                    <div>
                    
                        <div key={index} class="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
                            <div class="flex flex-col md:flex-row gap-3 justify-between">
                                {/* <!-- Product Information --> */}
                                <div class="flex flex-row gap-6 items-center">
                                    <div class="w-28 h-28">
                                        <img class="w-full h-full" src={item.image}/>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <p class="text-lg text-gray-800 font-semibold">{item.title}</p>
                                        <p class="text-xs text-gray-600 font-semibold">Color: <span class="font-normal">Black + Zinc</span></p>
                                        <p class="text-xs text-gray-600 font-semibold">Size: <span class="font-normal">42</span></p>
                                    </div>
                                </div>
                                {/* <!-- Price Information --> */}
                                <div class="self-center text-center">
                                            {/* <p class="text-gray-600 font-normal text-sm line-through">
                                                <span class="text-emerald-500 ml-2">(-50% OFF)</span>
                                            </p> */}
                                    <p class="text-gray-800 font-normal text-xl">{item.price}</p>
                                </div>
                                {/* <!-- Remove Product Icon --> */}
                                <div class="self-center">
                                    <button class="">
                                        <img src="image" alt="" />
                                        
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Product Quantity --> */}
                            <div class="flex flex-row self-center  gap-1">
                                <button onClick={() => dispatch(deleteQty({pid: item.pid}))} class="w-5 h-5 self-center rounded-full border border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                    </svg>
                                </button>
                                
                                <input value={item.quantity} type="text" readonly="readonly" class="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"/>
                                
                                <button  
                                onClick={() => dispatch(addQty({pid: item.pid}))}
                                class="w-5 h-5 self-center rounded-full border border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                </button>

                                
                                <MdDeleteOutline 
                                 className='text-4xl text-gray-500 opacity-70  left-48'
                                 onClick={(e) => dispatch(deleteItem({pid: item.pid}))} 
                                />
                            </div>
                        </div>
                    
                    </div>
                ))}
            </div>
          
        

            {/* <!-- Purchase Resume --> */}
            <Parchase button={true} data ={data} />
        </div>
    </>
  )}
}    

export default Cart