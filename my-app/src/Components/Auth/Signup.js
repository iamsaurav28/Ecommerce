import React from 'react'
import "./Auth.css"

const Signup = () => {
  return (
    <div>
     <form className='signpform'  >
     <input className='signupName' type="text" placeholder="Username"  />
     <input className='signupName' type="email" placeholder="Email" />
     <input className='signupName' type="password" placeholder="Password" />
     <button type="submit" className="signupbtn" >Sign up</button>
     </form>
    </div>
  )
}

export default Signup