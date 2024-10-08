import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/actions";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [features, setFeatures] = useState([]);

    // const items = useSelector(state => state.cart.items);
    // console.log("Items: ", items);

    useEffect(() => {
        const fetchdata = async () => {
            const url = `https://real-time-flipkart-api.p.rapidapi.com/product-details?pid=${id}`;
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "f6f76f7173msh52427597856ab78p125448jsn764df568ba7e",
                    "x-rapidapi-host": "real-time-flipkart-api.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchdata();
    }, []);

    const handleCartButton =  (e) =>{
        console.log("Button clicked");
            e.preventDefault();  // Prevent default if needed (optional)
            toast.success('Successfully added to cart!')
            dispatch(addItem({title: data.title, price: data.price, image: data.images[0]})); // Dispatch the action with the title
  
    }

    return (
        <>
            {/* <!-- component --> */}
            <div>
            <Toaster
                position="top-center"
                // reverseOrder={false}
            />
            </div>
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

                <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img
                        className="w-full"
                        alt="image of a girl posing"
                        src={data.images}
                    />
                    <img
                        className="mt-6 w-full"
                        alt="image of a girl posing"
                        src={data.images}
                    />
                </div>
                <div className="md:hidden">
                    <img
                        className="w-full"
                        alt="image of a girl posing"
                        src="https://i.ibb.co/QMdWfzX/component-image-one.png"
                    />
                    <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                        <img
                            alt="image-tag-one"
                            className="md:w-48 md:h-48 w-full"
                            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                        />
                        <img
                            alt="image-tag-one"
                            className="md:w-48 md:h-48 w-full"
                            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                        />
                        <img
                            alt="image-tag-one"
                            className="md:w-48 md:h-48 w-full"
                            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                        />
                        <img
                            alt="image-tag-one"
                            className="md:w-48 md:h-48 w-full"
                            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                        />
                    </div>
                </div>
                <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
                            {data.brand}    
                        </p>
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                            {data.title}
                        </h1>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <div class="text-base leading-4 text-gray-800 dark:text-gray-300">
                        {data?.highlights?.length > 0 ? (
                            data.highlights.map((highlight, index) => (
                                highlight && (
                                    <div className="m-2">{highlight} </div>
                                )
                            ))
                        ) : (
                            <p className="text-base text-gray-500 dark:text-gray-400">No highlights available</p>
                        )}
                        </div>

                        <div className="flex items-center justify-center">
                           
                            <svg
                                className="cursor-pointer text-gray-300 dark:text-white"
                                width="6"
                                height="10"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L5 5L1 9"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base font-bold leading-4 text-gray-800 dark:text-gray-300">
                          <span className="line-through font-normal" >
                            Rs {data.mrp} </span>
                            Rs {data.price}
                        </p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                               
                            </p>
                            <svg
                                className="text-gray-300 dark:text-white cursor-pointer"
                                width="6"
                                height="10"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L5 5L1 9"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-around mt-3">
                        <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-40 py-4 hover:bg-gray-700">
                            <svg
                                className="mr-3 text-white dark:text-gray-900"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M4.66699 4.83333V4.84166"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M11.333 11.5V11.5083"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                            </svg>
                            Buy Now
                        </button>
                        
                        <button onClick={handleCartButton}
                         className="dark:bg-white dark:text-gray-900
                          dark:hover:bg-gray-100 focus:outline-none focus:ring-2
                           focus:ring-offset-2 focus:ring-gray-800 text-base
                            flex items-center justify-center leading-none text-white
                             bg-gray-800 w-40 py-4 hover:bg-gray-700">
                
                            <svg
                                className="mr-3 text-white dark:text-gray-900"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M4.66699 4.83333V4.84166"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                                <path
                                    d="M11.333 11.5V11.5083"
                                    stroke="currentColor"
                                    // strokewidth="1.25"
                                    // stroke-linecap="round"
                                    // stroke-linejoin="round"
                                />
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                    <div>
                        <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                            It is a long established fact that a reader will be distracted by
                            thereadable content of a page when looking at its layout. The
                            point of usingLorem Ipsum is that it has a more-or-less normal
                            distribution of letters.
                        </p>
                        <div className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
                            

                        {/* {data?.specifications?.length > 0 ? (
                            data.specifications.map((item, index) => (
                                item && (
                                    <div className="m-2">{item.Dimentions} </div>
                                )
                            ))
                        ) : (
                            <p className="text-base text-gray-500 dark:text-gray-400">No highlights available</p>
                        )} */}
                        </div>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                            Length: 13.2 inches
                        </p>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                            Height: 10 inches
                        </p>
                        <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                            Depth: 5.1 inches
                        </p>
                        <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
                            Composition: 100% calf leather, inside: 100% lamb leather
                        </p>
                    </div>
                    {/* <div>
                        <div className="border-t border-b py-4 mt-7 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
                                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                    <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="currentColor" strokewidth="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
                        </div>
                    </div>
                    <div>
                        <div className="border-b py-4 border-gray-200">
                            <div data-menu className="flex justify-between items-center cursor-pointer">
                                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
                                <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                    <svg className="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="currentColor" strokewidth="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">If you have any questions on how to return your item to us, contact us.</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <script></script>
        </>
    );
}

export default Product;
