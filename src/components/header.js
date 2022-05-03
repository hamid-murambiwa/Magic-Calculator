import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/header.css';

function Header() {
  return (
    <>
      <header id="header-desk">
        <h1>Math Magician</h1>
        <ul>
          <li>
            <Link to="/" className="nav-l">Home</Link>
          </li>
          <li>
            <Link to="Calculator" className="nav-l">Calculator</Link>
          </li>
          <li id="qoute">
            <Link to="Quote" className="nav-l">Quote</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
