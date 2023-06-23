import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Auth.css";

const Auth = () => {

  return (
    <div className='top'>

<div className="authentication-page">
     <div className="container">
          <div className="row">

               <div className="section">
                    <div className="account-form">
                         <div className="form-btn">
                         <Link to="login"> Login</Link>
                         <Link to="signup"> Sign up</Link>
                              <hr id="Indicator" />
                         </div>
                         <Outlet />    
                    </div>
               </div>
          </div>
     </div>
</div>

    </div>
  )
}

export default Auth;