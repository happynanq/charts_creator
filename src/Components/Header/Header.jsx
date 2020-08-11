import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
  return (
    <nav>
    <div className="nav-wrapper  teal lighten-2">
      <Link to="/" className="brand-logo logo">chart compiler</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header 