import React from 'react';

function Header () {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>Making Your Dream Burgers Come True</h3>
            <h1><span>ABSOLUTELY</span><br/>DELICIOUS!</h1>
            <div className='header-btns'>
                <a href='reserve' className='header-btn'>Reserve A Table</a>
            </div>
        </div>
    </div>
  )
}

export default Header;
