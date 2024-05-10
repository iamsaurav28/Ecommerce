// import React, { useRef, useState } from 'react'
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom'

//   const Login = () => {
//     const inputElement = useRef();

//   const navigate = useNavigate();

//   const [Input, setInput] = useState({
//     email:"",
//     password:"",
//   })



//   const handlelogin = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post("https://mern-ecommerce-ssky.onrender.com/api/auth/users/login", Input);
//         if (response.status === 200) {
//           alert(response.data.message);
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("name", response.data.name);
//           navigate("/");
//         }
//       } catch (error) {
//         alert(error.response.data.message);
//       }
//     };

//   return (
//     <div className='home'>

// <form  onSubmit={handlelogin}>

//       <div>
//         <label >Email address</label>
//         <div className="mt-2">
//           <input name='email' ref={inputElement} value={Input.email} onChange={(e)=> setInput({...Input, [e.target.name]: e.target.value})} />
         
//         </div>
//       </div>

//       <div>
//         <div >
//           <label >Password</label>
        
//         </div>
//         <div className="mt-2">
//           <input name='password' ref={inputElement} value={Input.password} onChange={(e)=> setInput({...Input,[e.target.name]: e.target.value})}/>
      
//         </div>
//       </div>

//       <div style={{display:"inline-flex", marginTop:"15px" ,}}>
//         <button  >Sign in</button>
//         </div>
    

//       <div style={{margin:"20px"}} >Don't have account ? 
//      <Link to="/register">Register</Link>
//     </div>
    
//     </form>


//     </div>
//   )
// }

// export default Login;


// Login.jsx
import React, { useRef, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'; 
import "./Login.css"

const Login = () => {
  const inputElement = useRef();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://mern-ecommerce-ssky.onrender.com/api/auth/users/login", input);
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label>Email address</label>
          <div className="mt-2">
            <input name='email' ref={inputElement} value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
        </div>

        <div>
          <div>
            <label>Password</label>
          </div>
          <div className="mt-2">
            <input name='password' type="password" ref={inputElement} value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
        </div>

        <div style={{ display: "inline-flex", marginTop: "15px" }}>
          <button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Sign in"}
          </button>
        </div>

        <div style={{ margin: "20px" }}>Don't have an account? <Link to="/register">Register</Link></div>
      </form>
    </div>
  );
};

export default Login;
