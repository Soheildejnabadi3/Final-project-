import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo2.png';

function Navbar() {

  const[nav,setnav] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >=50){
      setnav(true);
    }
    else{
      setnav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" :"nav"}>
      <Link to='main' className='logo' >
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="reserve">Reserve a Table</Link></li>
        <li><Link to="#">Register</Link></li>
        <li><Link to="log-in">Log in</Link></li>
        

      </ul>
    </nav>
  )
}

export default Navbar;
