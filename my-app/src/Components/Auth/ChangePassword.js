import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";



const ChangePassword = () => {

     const navigate = useNavigate();

     const token = localStorage.getItem("token")

     const [Input, setInput] = useState({
          newpassword:"",
          confirmpassword:"",
        })

        const handlechangepassword= async(e)=>{
          e.preventDefault();

          try {
            const response = await axios.post("https://mern-ecommerce-ssky.onrender.com/api/auth/change-password", Input, {
               headers:{
                    authorization: `Bearer ${token}`
               }
            });
            

            alert((response.data.message));
            if (response.status === 200) {
              navigate("/login");
            }
          } catch (error) {
            alert(error.response.data.message);
          }
      

        }


  return (
    <div className='home'>
     <h2>change password</h2>

     <form onSubmit={handlechangepassword}>

     <div>
          <label >Password</label>
        <div className="mt-2">
          <input name='newpassword' type='password' value={Input.newpassword} onChange={(e)=> setInput({...Input,[e.target.name]: e.target.value})}/>
        </div>
      </div>

      <div>
          <label >Confirm Password</label>
        <div className="mt-2">
          <input name='confirmpassword' type='password' value={Input.confirmpassword} onChange={(e)=> setInput({...Input,[e.target.name]: e.target.value})}/>
        </div>
      </div>


      <button type='submit'>change</button>

     </form>

    </div>
  )
}

export default ChangePassword