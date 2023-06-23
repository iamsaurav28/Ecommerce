import React, { useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { Cartstate } from '../../Context/Context';
import "./Cart.css";

const Cart = () => {

  const{
    state: {cart}, dispatch
  }  = Cartstate();


  const [total, setTotal] = useState()

  useEffect(() =>{
      setTotal(cart.reduce((acc, curr) => acc+ Number(curr.price)*curr.qty ,0));
  }, [cart])
  

  return (
    <div className='cart'>
 <h1 className='cart-header'>BUY IT !! YOUR CHOICE IS BEST </h1>
 {
  cart.map((prod) => {
    return(
      <div>
      <div className='cart-container'>
        <div className='cart-item'>
      <img alt='random pics' className='cart-image' src={prod.image} />
      <div className='cart-name'>{prod.name}</div> 
      </div>
      <div className="cart-price">${prod.price}</div>
      <FormControl as="select" value={prod.qty} 
           onChange={(e) => dispatch({
            type: "CHANGE_CART_QTY",
            payload:{
              id:prod.id,
              qty:e.target.value
            }
           })}
      
      >
       {[...Array(prod.inStock).keys()].map((x) => (
        <option key={x + 1} >{x + 1}</option>
       ))}      
  
      </FormControl>

      <button  type='button' onClick={() => 
      dispatch({
          type: "REMOVE_FROM_CART",
          payload: prod
      })} >remove</button>
    
      </div>

      
     
      </div>
    )
  })
 }
      <div>
      SUBTOTAL{cart.length}
      </div>
      <span>$ {total}</span>
    </div>
  )
}

export default Cart;