import React from "react";
import "./Home.css";
import img1 from "../image/vicky.jpg";

const Home =() => {

     return(
               <div className="home">
                    <div className="Home-container">
                       <img alt="vicky kaushal with earbuds" className="vicky-image" src={img1} />
                       <h1 className="headphone caption">FEEL THE MUSIC WITH <br/> AN MAGIC OF<br/> WIRELESS HEADPHONES </h1>
                       <button className="headphone headphone-btn">click here</button>
                    </div>
                  
               </div>   
               
     )
}




export default Home;





