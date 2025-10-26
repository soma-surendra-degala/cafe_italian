import React from "react";
import { Link } from "react-scroll"; // smooth scroll
import hero from '../../assets/hero.mp4';
import cafe from '../../assets/cafe.png';
import dish from '../../assets/dish.svg';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster={cafe}
      >
        <source src={hero} type="video/mp4" />
      </video>

      <div className="container">
        <div className="overlay-dark"></div>

        <div className="overlay-content">
          <div className="d-flex justify-content-between w-100 align-items-center pt-3 hero-nav">
            <nav className="nav-links d-flex gap-4">
              <Link to="hero" smooth={true} duration={100}>Home</Link>
              <Link to="menu" smooth={true} duration={100}>Menu</Link>
              <Link to="contact" smooth={true} duration={100}>Contact</Link>
              <Link to="main" smooth={true} duration={100}>About</Link>
            </nav>

            <img src={cafe} alt="Cafe Logo" className="cafe-logo" />

            <button className="herobtn">
              <Link to="booking" smooth={true} duration={100}> Book a Table <i className="bi bi-arrow-right"></i></Link>
            </button>
          </div>

          <div className="hero-text-center">
            <p className="big">
              Welcome To <br /> Cafe Italia
            </p>
            <button className="btn1 mt-3">
              <Link to="menu" smooth={true} duration={100}>View Menu</Link>
            </button>
          </div>

          <div className="dish-img">
            <div className="dish-bg">
              <img src={dish} alt="Cafe Dish" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
