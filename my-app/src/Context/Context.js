import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer,productReducer} from "./Reducer";

const Cart = createContext();


const Context=({children}) =>{

  const Products = [...Array(20)].map((item) => ({
     id: faker.datatype.uuid(),
     name: faker.commerce.productName(),
     image: faker.random.image(),
     price: faker.commerce.price(),
     inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
     fastDelivery: faker.random.boolean(),
     ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
     category: faker.random.arrayElement(["Reebok", "Nike", "Puma"])
  }))
  
   const [state, dispatch] = useReducer(cartReducer,{
      products:Products,
      cart:[]
   })



   

   const [productState, productDispatch] = useReducer(productReducer,{
      byStock:false,
      byFastDelivery: false,
      searchQuery: "",
      priceRange: 1000,
    
   })

  console.log(Products)



     return(
               <Cart.Provider value={{state, dispatch, productState,productDispatch}}>
                             {children}
               </Cart.Provider>
          
     )
}


export default Context;


export const Cartstate=()=>{
     return useContext(Cart)
}