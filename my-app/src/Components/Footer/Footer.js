import React from "react";
import "./Footer.css"

const Footer =() => {
     return (
          <div className="footer">
               <h1 className="footer-contact center" >Contact us on</h1>
          <div className="contact-links"> 
               <a className="contact-link center" href="/">Whatsapp</a>
               <a className="contact-link center" href="/">Instagram</a>
               <a className="contact-link center" href="/">Discord</a>
          </div>
          </div>
     )
}

export default Footer;