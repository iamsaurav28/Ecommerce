// import React, { useEffect, useState } from 'react'
// import { FormControl } from 'react-bootstrap';
// import { Cartstate } from '../../Context/Context';
// import "./Cart.css";

// const Cart = () => {

//   const{
//     state: {cart}, dispatch
//   }  = Cartstate();


//   const [total, setTotal] = useState()

//   useEffect(() =>{
//       setTotal(cart.reduce((acc, curr) => acc+ Number(curr.price)*curr.qty ,0));
//   }, [cart])
  

//   return (
//     <div className='cart'>
//  <h1 className='cart-header'>BUY IT !! YOUR CHOICE IS BEST </h1>
//  {
//   cart.map((prod) => {
//     return(
//       <div>
//       <div className='cart-container'>
//         <div className='cart-item'>
//       <img alt='random pics' className='cart-image' src={prod.image} />
//       <div className='cart-name'>{prod.name}</div> 
//       </div>
//       <div className="cart-price">${prod.price}</div>
//       <FormControl
//   as="select"
//   value={prod.qty}
//   onChange={(e) =>
//     dispatch({
//       type: "CHANGE_CART_QTY",
//       payload: {
//         id: prod._id,
//         qty: parseInt(e.target.value)
//       }
//     })
//   }
// >

//        {[...Array(prod.inStock).keys()].map((x) => (
//         <option key={x + 1} >{x + 1}</option>
//        ))}      
  
//       </FormControl>

//       <button  type='button' onClick={() => 
//       dispatch({
//           type: "REMOVE_FROM_CART",
//           payload: prod
//       })} >remove</button>
    
//       </div>
//       </div>
//     )
//   })
//  }
//       <div>
//       SUBTOTAL{cart.length}
//       </div>
//       <span>$ {total}</span>
//     </div>
//   )
// }

// export default Cart;




import React, { useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { Cartstate } from '../../Context/Context';
import "./Cart.css";

const Cart = () => {

  const{
    state: {cart}, dispatch
  }  = Cartstate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);

  const increaseQty = (product) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: product._id,
        qty: product.qty + 1
      }
    });
  };

  const decreaseQty = (product) => {
    if (product.qty > 1) {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: product._id,
          qty: product.qty - 1
        }
      });
    }
  };

  const removeProduct = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product
    });
  };

  return (
    <div className='cart home'>
      <h1 className='cart-header'>BUY IT !! YOUR CHOICE IS BEST </h1>
      {cart.map((prod) => (
        <div key={prod._id} className='cart-container'>
          <div className='cart-item'>
            <img alt='random pics' className='cart-image' src={prod.image} />
            <div className='cart-name'>{prod.name}</div> 
          </div>
          <div className="cart-price">${prod.price}</div>
          <div className="cart-controls">
            <button onClick={() => decreaseQty(prod)}>-</button>
            <FormControl 
              as="input"
              type="number"
              value={prod.qty}
              readOnly
            />
            <button onClick={() => increaseQty(prod)}>+</button>
          </div>
          <button type='button' onClick={() => removeProduct(prod)}>Remove</button>
        </div>
      ))}
      <div className='subtotal'>
        SUBTOTAL: {cart.length}
      </div>
      <span className='total'>Total: ${total}</span>
    </div>
  );
}

export default Cart;
