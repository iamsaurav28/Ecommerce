import React from 'react'
import { Cartstate } from '../../Context/Context';
import Filters from '../Filters/Filters';
import "./SingleProducts.css";

const SingleProducts = () => {

  const {
    state: { products, cart },
    productState: { sort, byStock, byFastDelivery, priceRange, searchQuery, selectedRating }, // Make sure selectedRating is accessed from productState
    dispatch
  } = Cartstate();
  
  const transformproducts =() => {
     let sortedProducts = products;
 
     if (sort){
       sortedProducts = sortedProducts.sort((a,b) =>(
         sort ==="lowtohigh"? a.price-b.price: b.price-a.price
       )) 
     }

     if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
     }

     if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery)
     }

     if(priceRange){
      sortedProducts = sortedProducts.filter((item) => item.price <= priceRange)
     }

     if (selectedRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings === parseInt(selectedRating));
    }

     if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => 
      prod.name.toLowerCase().includes(searchQuery))
     }


     return sortedProducts;
  }



  return (
    <div className='product'>
      <Filters />
      <div className='singleproducts'> 
        {
          transformproducts().map((prod) => {
            return (
              <div className='prod-box' key={prod._id}>
                <img className='prod-image' src={prod.image} alt={prod.name} />
                <span className='prod-name'>{prod.name}</span>
                <div className='prod-details'>
                  <div>{`Price: $${prod.price}`}</div>
                  <div>{prod.inStock ? 'In Stock' : 'Out of Stock'}</div>
                  <div>{prod.fastDelivery ? 'Fast Delivery Available' : 'No Fast Delivery'}</div>
                  <div>{`Ratings: ${prod.ratings}`}</div>
                  <div>{`${prod.offer}`}</div>
                </div>
                <div className='prod-btn'>
                  {
                    cart.some((p) => p._id === prod._id) ? (
                      <button onClick={() =>{
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload: prod
                        })
                      }}>REMOVE</button>
                    ) : (
                      <button onClick={() =>{
                        dispatch({
                          type:"ADD_TO_CART",
                          payload: prod // Pass the specific product information to the dispatch function
                        });
                      }}>BUY NOW</button>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SingleProducts;