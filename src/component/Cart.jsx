import React, { useContext } from 'react'
import { myContext } from '../App'
import './cart.css'


const Cart = () => {

  const {state,setstate} = useContext(myContext)

  function removeFromCart(id){
    setstate(state.filter((ele) => {
      return ele.id !== id
    }))
  }

  return (
    <div className='cartDiv'>
      {
        state.length > 0 ? <>
          {state.map((ele)=>{
            return(
              <div className='cart'>
                <img src={ele.image} alt="" />
                <p>Price: $ {(ele.price).toFixed(2)}</p>
                <p>category: {ele.category}</p>
                <button onClick={() => {
                  removeFromCart(ele.id)
                }}>Remove From Cart</button>
              </div>
            )
          })}
        </> : <h3 style={{color:"gray"}}>Cart is Emprt</h3>
      }
    </div>
  )
}

export default Cart