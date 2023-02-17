import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="big_wrapper">
      <div className="wrapper">
        <div className="left_container">
          <div className="header_home_container">
            <h1>Karol Rogalski</h1>
          </div>
          <div className="header_desc">
            <p>Junior React Developer</p>
          </div>
          <div className="header_desc">
            <p>Currently looking for new position as a Front-end Developer</p>
          </div>
        </div>
        <div className="right_container">
          <div className="links_nav">
            <div>
              <Link className="route_link" to="/projects">
                Portfolio
              </Link>
            </div>
            <div>
              <Link className="route_link" to="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="route_link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
