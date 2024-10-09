import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions";

function MenPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();  // Use useNavigate instead of useNavigation
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedData = async () => {
      const url = "https://ecommerce-api3.p.rapidapi.com/menswear";
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
        console.log("mens data", result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchedData();
  }, []);


  return (
    <div className="">
      <div className="flex justify-center items-center flex-wrap gap-5  mt-4 ">
        {data.map((item, key) => (
          <Link to={`/product1/${key}`}>
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
    </div>
  );
}

export default MenPage;
