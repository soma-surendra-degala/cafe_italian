import React from "react";
import cafe from "../../assets/cafe.png";
import trip from "../../assets/trip.png";
import { Link } from "react-scroll";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container text-white py-4">
      {/* Logo */}
      <div className="d-flex justify-content-center mb-3">
        <img className="footercafe" src={cafe} alt="cafe" width={177} height={101} />
      </div>

      {/* Nav links (scroll to sections) */}
      <nav className="nav-links-footer d-flex flex-wrap justify-content-center gap-4 my-3">
        <Link to="hero" smooth={true} duration={100}><p>Home</p></Link>
        <Link to="menu" smooth={true} duration={100}><p>Menu</p></Link>
        <Link to="main" smooth={true} duration={100}><p>About</p></Link>
        <Link to="contact" smooth={true} duration={100}><p>Contact</p></Link>
      </nav>

      {/* Social icons (external links) */}
      <div className="social-links d-flex flex-wrap justify-content-center gap-4 my-3">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <img className="trip" src={trip} alt="trip" width={25} height={20} />
        </a>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="bi bi-google"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="bi bi-facebook"></i>
        </a>
      </div>

      <hr className="footer-line" />

      {/* Footer bottom */}
      <div className="text-center font p-2">
        <p>
          © 2024 Istanbul Restaurant Manchester. All Rights Reserved |
          <span className="powder"> Powered By Foodo</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
