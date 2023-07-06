import React from "react";
import { NavLink,Link, useNavigate} from "react-router-dom";
import { Cartstate } from "../../Context/Context";
import "./Navbar.css";


const Navbar =()=> {


const { state :{cart}, 
productDispatch
} = Cartstate();



const  navigate = useNavigate();

     const token = localStorage.getItem("token");
    


     const handleLogout=()=>{
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          alert("logout successfully")
          navigate("/login")
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
               <NavLink className="nav-link" to="/home" >Home</NavLink>
               <NavLink className="nav-link" to="/singleproducts" >Products</NavLink>
               <NavLink className="nav-link" to="/cart" >Cart
               <sup>{cart.length}</sup>
               </NavLink>
               <NavLink className="nav-link" to="/changepassword" >Account</NavLink>
               <div className='div-inline mx-auto my-2 my-lg-0'>
               {token && token !== null ?
                    <>
               <button className="nav-link logout" style={{color:"black"}} onClick={handleLogout}>Logout</button>
               </>
               :
               <>
     
             </>
          }
          </div>
          </div>





{/* 

          <input id='opensidebarmenu' type="checkbox" />
     <label for="opensidebarmenu" className="sidebaricon" ><i className="icon fas fa-bars">X</i></label>
        <div id='sidebarmenu' >
          <ul className='menu'>
              <li><NavLink className="nav-link" to="/home" >Home</NavLink></li>
              <li><NavLink className="nav-link" to="/singleproducts" >Products</NavLink></li>
              <li><NavLink className="nav-link" to="/cart" >Cart<sup>{cart.length}</sup></NavLink></li>
              <li><NavLink className="nav-link" to="/changepassword" >Account</NavLink></li>
         
          </ul>
        </div> */}


     </div>
)
}


export default Navbar;