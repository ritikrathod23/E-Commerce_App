import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function Product1() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [features, setFeatures] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);

        // Filter features based on the ID
        const filtered = json.find((item) => item.id === Number(id));
        setFeatures(filtered || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleCartButton = (e) => {
    e.preventDefault();
    toast.success("Successfully added to cart!");

    // Check if features is not null before dispatching
    if (features) {
      dispatch(
        addItem({
          title: features.title,
          price: features.price,
          image: features.image,
        })
      );
    }
  };

  if (!features) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img className="w-full" alt="Product" src={features.image} />
        </div>
        <div className="md:hidden">
          <img
            className="w-full"
            alt="Product"
            src={features.image || "https://i.ibb.co/QMdWfzX/component-image-one.png"}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
              {features.brand}
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {features.title}
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
              Rs {features.price}
            </p>
          </div>
          <div className="flex gap-3 justify-around mt-3">
            <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-40 py-4 hover:bg-gray-700">
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
              {features.description}
            </p>
            {/* Additional product specifications can go here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product1;
