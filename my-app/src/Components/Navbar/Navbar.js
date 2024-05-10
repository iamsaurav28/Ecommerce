import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
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
          <Link className="title" to="/">Darji Store</Link>
          <input className="search-bar" type="input" placeholder="search here"
          onChange={(e) =>
          productDispatch({
               type:"FILTER_BY_SEARCH",
               payload:e.target.value
          })
          }        />
          <div className="Navbar-links">
               <NavLink className="nav-link" to="/" >Home</NavLink>
               <NavLink className="nav-link" to="/singleproducts" >Products</NavLink>
               <NavLink className="nav-link" to="/cart" >Cart
               <sup>{cart.length}</sup>
               </NavLink>
               <NavLink className="nav-link" to="/changepassword" >Account</NavLink>
               <div className='div-inline mx-auto my-2 my-lg-0'>
               {token && token !== null ?
                    <>
               <Link className="nav-link logout" style={{color:"black"}} onClick={handleLogout}>
               <RiLogoutCircleRLine />
               </Link>
               </>
               :
               <>
     
             </>
          }
          </div>
          </div>






     </div>
)
}


export default Navbar;