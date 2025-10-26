import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container px-5">
      <nav className="navbar d-flex flex-wrap justify-content-between align-items-center">
        {/* Left side */}
        <div className="nav-left d-flex flex-wrap align-items-center">
          <span className="font">
            <i className="bi bi-geo-alt icon-color fs-6"></i> 2 Bury Old Road,
            Manchester, M8 9JN
          </span>
          <span className="font">
            <i className="bi bi-clock icon-color fs-6"></i> Mon-Sat 11am -
            11:30pm, Sun 12pm - 11pm
          </span>
        </div>

        {/* Right side */}
        <div className="nav-right d-flex flex-wrap align-items-center">
          <span className="font">
            <i className="bi bi-telephone icon-color fs-6"></i> 0161 795 5502
          </span>
          <span className="font">
            <i className="bi bi-envelope icon-color fs-6"></i>{" "}
            reservations@istanbulrestaurantmanchester.co.uk
          </span>
        </div>
      </nav>
    </div>
  );
}
