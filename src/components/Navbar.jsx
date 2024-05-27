import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/uni-cv">Uni Cv</Link></li>
        <li><Link to="/work-cv">Work Cv</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;