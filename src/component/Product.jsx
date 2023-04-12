import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../App'
import './product.css'



const Product = () => {


  const {state,setstate} = useContext(myContext)
  const [apiData, setapiData] = useState([])



  useEffect(()=>{
    apiFetching()
  },[])

  async function apiFetching() {
    const res = await fetch("https://fakestoreapi.com/products");
    const text = await res.text();
    const data = JSON.parse(text);
    setapiData(data);
  }

  return (
    <div className='product'>
      {
        apiData.length > 0 ? <>
        {
          apiData.map((ele)=>{
            return(
              <div className='productCard'>
                <img src={ele.image} />
                <p>Price:  $ {(ele.price).toFixed(1)}</p>
              <p>Category: {ele.category}</p>
              <button onClick={()=>{
                setstate([...state,ele]);
              }}>Add to Cart</button>
              </div>
            )
          })
        }
        </> : <h3 style={{color:"gray"}}>Please Wait While Page Is Loading !!!</h3>
      }
    </div>
  )
}

export default Product