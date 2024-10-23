import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function Watches() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
    const fetchedData = async () => {
      const url = "https://ecommerce-api3.p.rapidapi.com/watches";
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
        console.log("womens data", result);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    fetchedData();
  }, []);


  return (
    <div className="">
      {loading ? (
        <div  className="flex justify-center items-center flex-wrap gap-5  mt-4 " > 
          {[...Array(10)].map((_, index) => (
          <Skeleton key={index} width={290} height={420} />
        ))}
        </div>
      ) : (
      <div className="flex justify-center items-center flex-wrap gap-5  mt-4 ">
        {data.map((item, key) => (
          <Link to={`/product1/watches/${key}`}>
          <Card
            key={key}
            title={item.Brand}
            image={item.Image}
            price={item.Price}
            description={item.Description}
          />
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}

export default Watches;
