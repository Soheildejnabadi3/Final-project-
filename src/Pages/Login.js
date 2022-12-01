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

    console.log(inputs);
  }
  return(
    <div>
      <Navbar/>
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
  )
}