import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div>
      <header className="header-container">
        <Link className='link' to="/">
          <div className="logo">DEMO STREAMING</div>
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
