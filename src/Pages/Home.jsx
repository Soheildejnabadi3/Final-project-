import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products/>
    </div>
  )
}

export default Home;
