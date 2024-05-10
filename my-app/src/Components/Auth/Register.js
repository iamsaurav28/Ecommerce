// import React, { useRef, useState } from 'react'
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom'

// const Register = () => {
//   const inputElement = useRef();

//      const navigate = useNavigate();

//      const [Input, setInput] = useState({
//           name:"",
//           email: "",
//           password:"",
//      })


//   const handlesubmit = async(e) => {
//     e.preventDefault();

//      try {
//       const response = await axios.post("https://mern-ecommerce-ssky.onrender.com/api/auth/users/register", Input);
//       alert(response.data.message);
//       if (response.status === 201) {
//         navigate("/login");
//       }
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };


//   return (
//     <div className="home">


// <form onSubmit={handlesubmit} >
      
 
//       <div>
//           <label >UserName</label>
//           <div className="mt-2">
//             <input name="name" ref={inputElement} value={Input.name} onChange={(e) => setInput({...Input, [e.target.name]: e.target.value})}  />
//           </div>
//         </div>
  
//         {/* <div >
//           <label >Email address</label>
//           <div className="mt-2">
//             <input name="email" ref={inputElement} value={Input.email} onChange={(e) => setInput({...Input, [e.target.name]: e.target.value})} />
//           </div>
//         </div> */}

        
//       <div>
//           <label >Email</label>
//           <div className="mt-2">
//             <input name="email" ref={inputElement} value={Input.email} onChange={(e) => setInput({...Input, [e.target.name]: e.target.value})}  />
//           </div>
//         </div>
             
  
//         <div>
//           <div >
//             <label >Password</label>
          
//           </div>
//           <div className="mt-2">
//             <input name="password" ref={inputElement} value={Input.password} onChange={(e) => setInput({...Input,[e.target.name]:e.target.value })} />
//           </div>
//         </div>
  
//         <div style={{display:"inline-flex", marginTop:"15px" ,}}>
//           <button type="submit" >Sign in</button>
//           </div>
      
  
//         <div style={{margin:"20px"}} >Already have account ? 
//        <Link to="/login">Login</Link>
//       </div>
      
//       </form>
  


//     </div>
//   )
// }

// export default Register



// Register.jsx
import React, { useRef, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'; 
import "./Register.css";

const Register = () => {
  const inputElement = useRef();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://mern-ecommerce-ssky.onrender.com/api/auth/users/register", input);
      alert(response.data.message);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label>UserName</label>
          <div className="mt-2">
            <input name="name" ref={inputElement} value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
        </div>

        <div>
          <label>Email</label>
          <div className="mt-2">
            <input name="email" ref={inputElement} value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
        </div>

        <div>
          <div>
            <label>Password</label>
          </div>
          <div className="mt-2">
            <input name="password" ref={inputElement} value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
          </div>
        </div>

        <div style={{ display: "inline-flex", marginTop: "15px" }}>
          <button type="submit" disabled={loading}>
            {loading ? <Loader /> : "Sign up"}
          </button>
        </div>

        <div style={{ margin: "20px" }}>Already have an account? <Link to="/login">Login</Link></div>
      </form>
    </div>
  );
};

export default Register;

