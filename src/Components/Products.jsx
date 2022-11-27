import React from 'react';
import Productbox from './Productbox';
import pimage1 from "../images/11.png";
import pimage2 from '../images/22.png';
import pimage3 from '../images/33.png';

function Products() {
  return (
    <div id='products'>
        <h1>Nothing To Be Guilty About</h1>
        <div className='a-container'>
            <Productbox image={pimage1} title="Burger 1"/>
            <Productbox image={pimage2} title="Burger 2"/>
            <Productbox image={pimage3} title="Burger 3"/>
        </div>
    </div>
  )
}

export default Products;
 