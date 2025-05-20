import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Curriculum Vitae</Link>        
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/uni-cv">University</Link>
                </li>
            <li className="nav-item">
                <Link className="nav-link" to="/work-cv">Work</Link>
                </li>
        </ul>
    </nav>
  );
};

export default Navbar;