import React from 'react';

function Header() {
    return(
      <header className='header'>
        <nav className="nav">
          <img src={require('./logo512.png')} alt="" className='nav-logo' />
          <h3>React Facts</h3>
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
    )
}

export default Header