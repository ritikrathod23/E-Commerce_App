import React, { useState, useEffect } from "react";
import Card from "../components/Card";

function MenPage() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      // const res = await fetch('https://fakestoreapi.com/products')
      // const data = await res.json()

      // const filtered = data.filter((item)=>(item.category === "men's clothing"))
      // console.log(filtered)
      // setData(filtered)

      const url = 'https://ecommerce-api3.p.rapidapi.com/menswear';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f6f76f7173msh52427597856ab78p125448jsn764df568ba7e',
		'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
	}
};

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // const detail = result.data.products
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchedData();
  }, []);
  return (
    <div className="">
      <div className="flex justify-center items-center flex-wrap gap-5  mt-4 ">
        {data.map((item) => (
          <Card
            title={item.Brand}
            image={item.Image}
            price={item.Price
            }
            description={item.Description}
          />
        ))}
      </div>
    </div>
  );
}

export default MenPage;
