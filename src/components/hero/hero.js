import React from 'react';
import hero from '../../assets/hero.mp4';
import cafe from '../../assets/cafe.png';
import dish from '../../assets/dish.svg';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video 
        className="background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={hero} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay container px-5">
        {/* Top Navigation */}
        <div className="d-flex justify-content-between w-100 align-items-center pt-3">
          <nav className="nav-links d-flex gap-4">
            <p>Home</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact</p>
          </nav>
          
          <img src={cafe} alt="Cafe Logo" width={177} height={101} />

          <button className="btn1">
            Book a Table <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Center Text */}
        <div className="text-center hero-text">
          <p className="big">
            Welcome To <br /> Cafe Italia
          </p>
          <button className="btn1 mt-3">
            View Menu <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {/* Bottom Dish */}
        <div className="dish-img">
          <div className="dish-bg">
            <img src={dish} alt="Cafe Dish" width={51} height={77} />
          </div>
        </div>
      </div>
    </div>
  );
}
