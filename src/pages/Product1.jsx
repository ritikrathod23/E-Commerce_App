import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

function Product1() {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const [data, setData] = useState([]);
  const [features, setFeatures] = useState(null);
  const navigate = useNavigate();
  const [ isLoading, setLoading ] = useState (false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const url = `https://ecommerce-api3.p.rapidapi.com/${type}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "f6f76f7173msh52427597856ab78p125448jsn764df568ba7e",
          "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        console.log("result", result)
        console.log("type", type)

        const p = result.map((item) => item.Unnamed?.[0]);

        const matchingData = result.filter((item) => item["Unnamed: 0"] == id);
        setFeatures(matchingData[0])
        setLoading(false)
        
      } catch (error) {
        console.error(error);
      }
    };
  fetchData();
}, [id]);

const handleCartButton = (e) => {
  e.preventDefault();
  toast.success("Successfully added to cart!");
  dispatch(addItem({pid: features["Unnamed: 0"],
    title: features.Brand,
    price: features.Price.slice(1),
    image: features.Image,
    quantity:1 
    }));
    

};
const handleBuyNow = () => {
  // e.preventDefault();
  navigate("/cart")
  dispatch(addItem({pid: 
    features["Unnamed: 0"], title: features.Brand, price: features.Price.slice(1), image: features.Image, quantity:1 }));
  
};
return (
  <>
    <div>
      <Toaster position="top-center" />
    </div>
    {isLoading ? (
                <div className="overflow-x-hidden md:flex items-center content-center gap-16 justify-center py-12 2xl:px-20 md:px-6 px-4">
                    <div>
                        <Skeleton width={400} height={500} />
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <SkeletonTheme>
                            <Skeleton width={600} height={70} />
                            <Skeleton width={600} height={136} />
                            <Skeleton width={600} height={48} />
                            <Skeleton width={600} height={200} />
                        </SkeletonTheme>
                    </div>
                </div>
            ) : (
            <div>
            {features && (
            <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
              <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="Product" src={features.Image} />
              </div>
              <div className="md:hidden">
                <img
                  className="w-full"
                  alt="Product"
                  src={features.Image}
                />
              </div>
              <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                  <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                    {features.Brand}
                  </p>
                  <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                    {features.Brand}
                  </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="text-base leading-4 text-gray-800 dark:text-gray-300">
                    {features.highlights?.length > 0 ? (
                      features.highlights.map((highlight, index) => (
                        <div key={index} className="m-2">
                          {highlight}
                        </div>
                      ))
                    ) : (
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        No highlights available
                      </p>
                    )}
                  </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-base font-bold leading-4 text-gray-800 dark:text-gray-300">
                    <span className="line-through font-normal">Rs {data.mrp} </span>
                    Rs {features.Price}
                  </p>
                </div>
                <div className="flex gap-3 justify-around lg:mt-3  fixed bottom-0 w-full lg:relative lg:bottom-0">
                  <button onClick={handleBuyNow} className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-40 py-4 hover:bg-gray-700">
                    Buy Now
                  </button>
                  <button
                    onClick={handleCartButton}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-40 py-4 hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                    {features.Description}
                  </p>
                  {/* Additional product specifications can go here */}
                </div>
              </div>
            </div>
            )}
    </div>)}
  </>
);
}

export default Product1;
