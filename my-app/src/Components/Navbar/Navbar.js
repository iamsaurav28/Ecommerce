import React, { useState } from "react";
import { NavLink,Link} from "react-router-dom";
import { Cartstate } from "../../Context/Context";
import "./Navbar.css";


const Navbar =()=> {

const [style, setStyle] = useState({
     color:"black",
     backgroundColor:"white"
})


const [btntxt, setBtntxt] = useState("Dark mode")

const { state :{cart}, 
productDispatch
} = Cartstate();


const changecolor =()=> {
     
      if (style.color === "white"){
     setStyle({
          color:"black",
          backgroundColor:"white"
     })
     setBtntxt("Dark mode")
}else{
     setStyle({
          color:"white",
          backgroundColor:"black"
     })
     setBtntxt("Light mode")
}
}




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
               <NavLink className="nav-link" to="/home" style={style}>Home</NavLink>
               <NavLink className="nav-link" to="/singleproducts" style={style}>Products</NavLink>
               <NavLink className="nav-link" to="/cart" style={style}>Cart
               <sup>{cart.length}</sup>
               </NavLink>
               <NavLink className="nav-link" to="/auth" style={style}>Account</NavLink>
               <button onClick={changecolor}>{btntxt}</button>
          </div>
     </div>
)
}


export default Navbar;