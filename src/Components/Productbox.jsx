import React from 'react';

function Productbox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        
        <div className='a-b-text'>
            <h2> {props.title} </h2>
            <div className='productbox-button'>
              <a href='reserve' className='productbox-button'>Reserve a Table</a>
            </div>
        </div>
    </div>
  )
}

export default Productbox;
