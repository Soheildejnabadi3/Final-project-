import React from 'react';
import Navbar from '../Components/Navbar';

function Login() {
  return (
    <div>
        <Navbar/>
      <h1 className='Log-in'>Log In</h1>
      <label for = "userName"><b>Username</b></label>
      <input type = "text" placeholder="Enter Username" name = "userName" required></input>

      <label for = "psw"><b>Password</b></label>
      <input type = "password" placeholder="Enter Password" name = "psw" required></input>
      <br></br>
      <button type="submit">Click to Login</button>
      
    </div>
  )
}

export default Login;
