import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchedData = async ()=>{ 
          await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
             console.log("data",data)
        }   
        fetchedData();
    }, [])
    
       
  return (
    <div className=''>
    <div className='flex justify-center items-center flex-wrap gap-5  mt-4 '>

    {data.map((item)=>(
      <Link to={`/product1/${item.id}`}>
        <Card title={item.title}
         image={item.image}
         price={item.price} 
         description={item.description}
         /> 
      </Link>
    ))}
    </div>
    </div>
  )
}

export default Dashboard