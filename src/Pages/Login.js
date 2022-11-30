import React from 'react';
import Navbar from '../Components/Navbar';
function Login() {
  return (
    
    <div>
      <Navbar/>
      <div>
      <h1 className='Log-in'>Log In</h1>
      <form action="process-inc.php" method="post">
      <label for = "userName"><b>Username</b></label>
      <input type = "text" placeholder="Enter Username" name = "userName" required></input>

      <label for = "psw"><b>Password</b></label>
      <input type = "password" placeholder="Enter Password" name = "psw" required></input>
      <br></br>
      <button>Click to Login</button>
      </form>
      </div>

    
    </div>
    
  )
}

export default Login;
