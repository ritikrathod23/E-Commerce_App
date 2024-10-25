import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from  'react-redux'


function Parchase(button) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart)
  const but = button.button

  const [price, setPrice] = useState(null); 
  const [total, setTotal] = useState(null);
  const [btn, setBtn ] = useState(null)

  // Use a conditional check or logic to set the price once
  useEffect(() => { 
    if(but == true){
      setBtn(true)
    }
    else{
      setBtn(false)
    }

    const priceSet = () =>{
      const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity
       
      },0)
      setPrice(total)
    }
    priceSet();
    


  }, [items]);
 

  return (
    <>
    <div className="flex flex-col w-full h-fit gap-4 p-4">
      <p className="text-blue-900 text-xl font-extrabold">Purchase Resume</p>

      <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Subtotal ({items.length } Items)</p>
          <p className="text-end font-bold"></p>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Freight</p>
          <div>
            <p className="text-end font-bold">{price}</p>
            {/* <p className="text-gray-600 text-sm font-normal">Arrives on Jul 16</p> */}
          </div>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Delivery Charges</p>
          <span className="text-gray-500 text-lg ">40</span>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Total</p>
          <div>
            <p className="text-end font-bold">{price + 40 }</p>
          </div>
        </div>
        {btn && (
        <div className="flex gap-2">
          <Link to={'/userdetails'}>
          <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
            Go to CheckOut
          </button>
          </Link>
          <Link to={"/"}>
            <button className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
              ADD MORE PRODUCTS
            </button>
          </Link>
          
        </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Parchase;
