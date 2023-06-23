import React from 'react'
import { Cartstate } from '../../Context/Context';
import Filters from '../Filters/Filters';
import "./SingleProducts.css";

const SingleProducts = () => {

   const { state :{ products,cart },productState: { sort,byStock, byFastDelivery, priceRange ,searchQuery},
dispatch
   } = Cartstate();


  //  const{productState: { sort },
  
  // productDispatch} = Cartstate();

  
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
                         transformproducts().map((prod)=> {
                              return(
                                <div className='prod-box'>
                                <img className='prod-image' src={prod.image} alt="images" />
                               <span className='prod-name'>{prod.name}</span>
                               <div>{prod.price}</div>
                               <div>{prod.fastDelivery}</div>
                               <div className='prod-btn'>

                                {
                                  cart.some((p) => p.id === prod.id) ? (
                                    <button  onClick={() =>{
                                      dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload: prod
                                      })
                                     }}>REMOVE</button>
                                  ):(
                                    <button onClick={() =>{
                                      dispatch({
                                        type:"ADD_TO_CART",
                                        payload:prod
                                    
                                      })
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