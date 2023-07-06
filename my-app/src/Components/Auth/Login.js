import React, { useState } from 'react'
import axios from "../../Services/AxiosInterceptor";
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [Input, setInput] = useState({
    email:"",
    password:"",
  })


 

    const handlelogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("api/auth/users/login", Input);
        if (response.status === 200) {
          alert(response.data.message);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.name);
          navigate("/home");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    };

  return (
    <div className='home'>

<form  onSubmit={handlelogin}>

      <div>
        <label >Email address</label>
        <div className="mt-2">
          <input name='email' value={Input.email} onChange={(e)=> setInput({...Input, [e.target.name]: e.target.value})} />
         
        </div>
      </div>

      <div>
        <div >
          <label >Password</label>
        
        </div>
        <div className="mt-2">
          <input name='password' value={Input.password} onChange={(e)=> setInput({...Input,[e.target.name]: e.target.value})}/>
      
        </div>
      </div>

      <div style={{display:"inline-flex", marginTop:"15px" ,}}>
        <button  >Sign in</button>
        </div>
    

      <div style={{margin:"20px"}} >Don't have account ? 
     <Link to="/register">Register</Link>
    </div>
    
    </form>


    </div>
  )
}

export default Login;