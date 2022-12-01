import Navbar from '../Components/Navbar';
import "./Login.css";
import axios from "axios"
import { useState } from 'react';

export default function Login(){

  const [inputs, setInputs] = useState({})

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8080/api/user/login', inputs)
    console.log(inputs);
  }
  return(
    <div>
      <Navbar/>
      <div className='login'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
              <label>UserName: </label>
              </th>
              <td>
              <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>


            <tr>
              <th>
              <label>Password: </label>
              </th>
              <td>
              <input type="password" name="psw" onChange={handleChange}/>
              </td>
            </tr>


            <tr>
              <th>

              </th>
              <td colSpan="2" align="right">
              <button>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
       
      </form>
      </div>
    </div>
  )
}