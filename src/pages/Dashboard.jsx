import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";

function Dashboard() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setLoading(true)
        const fetchedData = async ()=>{ 
          await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
             console.log("data",data)
             setLoading(false)
        }   
        fetchedData();
    }, [])
    
       
  return (
    <div className=''>
      {loading ? (
        <div  className="flex justify-center items-center flex-wrap gap-5  mt-4 " > 
          {[...Array(10)].map((_, index) => (
          <Skeleton key={index} width={290} height={420} />
        ))}
        </div>
      ) : (
      <div className='flex justify-center items-center flex-wrap gap-5  mt-4 '>

    {data.map((item, index)=>(
      <Link to={`/product1/${item.id}`}>
        <Card
         index={index}
         title={item.title}
         image={item.image}
         price={item.price} 
         description={item.description}
         /> 
      </Link>
    ))}
    </div>
      )}
    </div>
  )
}

export default Dashboard