import React from 'react';
import { Cartstate } from '../../Context/Context';
import "./Wishlist.css";

const Wishlist = () => {

  const {
    state: { wishlist, cart },
    dispatch
  } = Cartstate();

  return (
    <div className='wishlist'>
      <h1 className='wishlist-header'>Your Wishlist</h1>
      <div className='wishlist-products'>
        {wishlist.map((prod) => (
          <div key={prod._id} className='wishlist-item'>
            <img alt={prod.name} className='wishlist-image' src={prod.image} />
            <span className='wishlist-name'>{prod.name}</span>
            <div className='wishlist-details'>
              <div>{`Price: $${prod.price}`}</div>
              <div>{prod.inStock ? 'In Stock' : 'Out of Stock'}</div>
              <div>{prod.fastDelivery ? 'Fast Delivery Available' : 'No Fast Delivery'}</div>
              <div>{`Ratings: ${prod.ratings}`}</div>
            </div>
            <div className='wishlist-btn'>
              {cart.some((c) => c._id === prod._id) ? (
                <button onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod
                  });
                }}>REMOVE FROM CART</button>
              ) : (
                <button onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod
                  });
                }}>Buy</button>
              )}
              <button onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: prod
                });
              }}>REMOVE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
