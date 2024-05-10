import React from 'react'
import { Cartstate } from '../../Context/Context';
import "./Filters.css";

const Filters = () => {
  
const {productState:{sort, byStock, byFastDelivery, priceRange, selectedRating}, 
productDispatch} = Cartstate();

  return (
    <div>
   
     <div className='filters-container'>
          <span>
          <form className='Ascending-container'>
               <label className='Ascending'>Ascending</label>
               <input type="radio" onChange={() => 
               productDispatch({
                    type:"SORT_BY_PRICE",
                    payload: "lowtohigh"
               })}
                 checked ={sort === "lowtohigh" ? true: false}
                />
          </form>
          </span>
          <span>
          <form className='Descending-container'>
               <label className='Descending'>Descending</label>
               <input type="radio" onChange={() => productDispatch({
                    type:"SORT_BY_PRICE",
                    payload:"hightolow"
               })}
                 checked ={sort === "hightolow" ? true : false}
               />
          </form>
          </span>
          <span>
          <form className='Price-container'>
               <label className='price'>Price</label>
               <input
               className='range'
               type="range"
               min={50}
               step={1}
               max={900}
               value={priceRange}
               onChange={(e) =>
                 productDispatch({ type: "PRICE_RANGE", payload: e.target.value })}  />
               <div>{priceRange}</div>
          </form>
          <form className='Stock-container'>
               <label className='Stock'>Stock</label>  
               <input type="checkbox" 
               onChange={() => productDispatch({
                  type:"FILTER_BY_STOCK",
               })}
                checked={byStock}
               />
          </form>
          <form className='FastDelivery-container'>
               <label className='FastDelivery'>Fast-Delivery</label>
               <input type="checkbox" 
               onChange={() => productDispatch({
                    type: "FILTER_BY_DELIVERY"
               })}
               checked={byFastDelivery}
               />
          </form>

          <form className='Rating-container'>
          <label className='Rating'>Rating</label>
          <select
            value={selectedRating || ''}
            onChange={(e) => productDispatch({ type: "FILTER_BY_RATING", payload: e.target.value })}
          >
            <option value="">All</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </form>


          <div className='clearfilter-container'>
               <button className='clearfilter' onClick={() => productDispatch ({
                    type:"CLEAR_FILTERS"
               })}> Clear Filter</button>

          </div>
          </span>
          
     </div>
    </div>
  )
}

export default Filters