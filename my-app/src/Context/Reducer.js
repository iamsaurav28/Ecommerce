// export const cartReducer = (state, action) => {
// switch(action.type){
//      case "ADD_TO_CART":
//      return {...state, cart: [...state.cart, {...action.payload,qty:1}]}
//      case "REMOVE_FROM_CART":
//      return {...state,cart: state.cart.filter((c) => c.id !== action.payload.id)} 
//      case "CHANGE_CART_QTY":
//      return {...state, cart: state.cart.filter((c) => c.id=== action.payload.id ? (c.qty= action.payload.qty) : c.qty ),}
//      default:
//           return state;
// }};


export const cartReducer = (state, action) => {
     switch (action.type) {
       case "ADD_TO_CART":
         return {
           ...state,
           cart: [...state.cart, { ...action.payload, qty: 1 }]
         };
       case "REMOVE_FROM_CART":
         return {
           ...state,
           cart: state.cart.filter((c) => c._id !== action.payload._id)
         };

         case "ADD_TO_WISHLIST":
          return {
            ...state,
            wishlist: [...state.wishlist, action.payload]
          };
        case "REMOVE_FROM_WISHLIST":
          return {
            ...state,
            wishlist: state.wishlist.filter((w) => w._id !== action.payload._id)
          };
          
       case "CHANGE_CART_QTY":
         return {
           ...state,
           cart: state.cart.map((item) =>
             item._id === action.payload.id
               ? { ...item, qty: action.payload.qty }
               : item
           )
         };
       default:
         return state;
     }
   };
   
   
   




export const productReducer = (state, action) => {
       switch(action.type){
          case "SORT_BY_PRICE":
               return {...state, sort: action.payload};
          case "FILTER_BY_STOCK":
               return {...state, byStock: !state.byStock};
          case "FILTER_BY_DELIVERY":
               return{...state, byFastDelivery: !state.byFastDelivery};
          case "PRICE_RANGE":
                    return { ...state, priceRange: action.payload };
          case "FILTER_BY_SEARCH":
               return {...state, searchQuery: action.payload};

          case "FILTER_BY_RATING":
               return {...state, selectedRating: action.payload};     
               
          case "CLEAR_FILTERS":
               return {
                    byStock:false,
                    byFastDelivery: false,
                    searchQuery:"",
                    priceRange:1000,
                }               
       
               
          default:
               return state;      
          }
}


// export function reducerFun (state, action) {
//      switch (action.type) {
//           case "PRICE-RANGE":
//                return {
//                  ...state,
//                  // ...data,
//                  price: action.price,
//                  state: state.filter((item) => action.price > item.price)
//                };
//              default:
//                return { state };
//            }
//          }
