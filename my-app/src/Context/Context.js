// import { createContext, useContext, useReducer } from "react";
// import faker from "faker";
// import { cartReducer,productReducer} from "./Reducer";

// const Cart = createContext();

// const Context=({children}) =>{

//   const Products = [...Array(20)].map((item) => ({
//      id: faker.datatype.uuid(),
//      name: faker.commerce.productName(),
//      image:faker.image.image(1234, 2345, true),
//      price: faker.commerce.price(),
//      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//      fastDelivery: faker.datatype.boolean(),
//      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//      category: faker.random.arrayElement(["Reebok", "Nike", "Puma"])
//   }))
  

  
//    const [state, dispatch] = useReducer(cartReducer,{
//       products:Products,
//       cart:[],
//    })

   

//    const [productState, productDispatch] = useReducer(productReducer,{
//       byStock:false,
//       byFastDelivery: false,
//       searchQuery: "",
//       priceRange: 1000,
//       selectedRating: null
//    })

//   console.log(Products)

//      return(
//                <Cart.Provider value={{state, dispatch, productState,productDispatch}}>
//                              {children}
//                </Cart.Provider>
          
//            )

// }


// export default Context;


// export const Cartstate=()=>{
//      return useContext(Cart)
// }


import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducer";
import { products } from "./productsData"; // Import products from the separate file

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    searchQuery: "",
    priceRange: 1000,
    selectedRating: null,
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const Cartstate = () => {
  return useContext(Cart);
};
