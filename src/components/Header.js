import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <img src="http://www.w3.org/2000/svg" alt="" /> 
    
          <h1 className='logo'>Perplexity Clone</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="">Home</Link></li>
            <li><Link to="/">Discover</Link></li>
            <li><Link to="">Library</Link></li>
            <li><Link to="">Sign</Link></li>
            <li className='Signup'><Link to="">Signup</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
