import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from  'react-redux'


function Parchase(data) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart)
  console.log("items",items)

  const [price, setPrice] = useState(null); 
  const [total, setTotal] = useState(null);

  // Use a conditional check or logic to set the price once
  useEffect(() => {

    const priceSet = () =>{
      const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity
       
      },0)
      setPrice(total)
      console.log("qnty",total)
    
    
      
      // if(price){
      //   let sum = 0
      //   price.forEach(ele => {
      //     sum += ele
      //   })
      //   setTotal(sum)
      //   console.log("sum :", sum)  
      // }
    }
    priceSet();
    


  }, [items]); // Add details to the dependency array to avoid unnecessary re-renders
 
  const handleFinish=() =>{
    toast.success("Thanks for Purching")
  } 

  return (
    <>
    <Toaster position="top-center   "/>
    <div class="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
      <p class="text-blue-900 text-xl font-extrabold">Purchase Resume</p>

      <div class="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
        <div class="flex flex-row justify-between">
          <p class="text-gray-600">Subtotal ({items.length } Items)</p>
          <p class="text-end font-bold"></p>
        </div>
        <hr class="bg-gray-200 h-0.5" />
        <div class="flex flex-row justify-between">
          <p class="text-gray-600">Freight</p>
          <div>
            <p class="text-end font-bold">{price}</p>
            {/* <p class="text-gray-600 text-sm font-normal">Arrives on Jul 16</p> */}
          </div>
        </div>
        <hr class="bg-gray-200 h-0.5" />
        <div class="flex flex-row justify-between">
          <p class="text-gray-600">Delivery Charges</p>
          <span class="text-gray-500 text-lg ">40</span>
        </div>
        <hr class="bg-gray-200 h-0.5" />
        <div class="flex flex-row justify-between">
          <p class="text-gray-600">Total</p>
          <div>
            <p class="text-end font-bold">{price + 40 }</p>
          </div>
        </div>
        <div class="flex gap-2">
          <button onClick={handleFinish} class="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
            FINISH
          </button>
          <Link to={"/mobilespage"}>
            <button class="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
              ADD MORE PRODUCTS
            </button>
          </Link>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Parchase;
