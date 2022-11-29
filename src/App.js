import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from './Components/Products';
import Home from './Pages/Home';
import {css} from "@emotion/react";
import ClockLoader from 'react-spinners/ClockLoader';
import Login from "./Pages/Login";

function App() {

  const[loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  return (
    <div className="App">

      {
        loading ? <ClockLoader color={"#926e5a"} Loading={loading} css={override} size={40}/>
        :
        <>
          <Navbar/>
          <Header/>
          <Products/>
           
        </>
      }
      
    </div>
  );
}

export default App;
