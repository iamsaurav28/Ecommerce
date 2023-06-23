import React, { useState } from "react";
import { NavLink,Link} from "react-router-dom";
import { Cartstate } from "../../Context/Context";
import "./Navbar.css";


const Navbar =()=> {


const { state :{cart}, 
productDispatch
} = Cartstate();



return(
     <div className="Navbar" >
          <Link className="title" to="/home">Darji Store</Link>
          <input className="search-bar" type="input" placeholder="search here"
          onChange={(e) =>
          productDispatch({
               type:"FILTER_BY_SEARCH",
               payload:e.target.value
          })
          }        />
          <div className="Navbar-links">
               <NavLink className="nav-link" to="/home" >Home</NavLink>
               <NavLink className="nav-link" to="/singleproducts" >Products</NavLink>
               <NavLink className="nav-link" to="/cart" >Cart
               <sup>{cart.length}</sup>
               </NavLink>
               <NavLink className="nav-link" to="/auth" >Account</NavLink>
          </div>
     </div>
)
}


export default Navbar;