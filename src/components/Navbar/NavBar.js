import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub, AiFillHome } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-link-item">
        <Link to="/" className="nav-link">
          <AiFillHome />
        </Link>
      </div>
      <div className="nav-link-item">
        <a
          href="https://www.linkedin.com/in/karol-rogalski/"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="nav-link-item">
        <a href="https://github.com/Karol204" className="nav-link" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div className="nav-link-item"></div>
      <div className="line" />
    </div>
  );
};

export default NavBar;
