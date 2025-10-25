import React from 'react';
import './menu.css';
import italian from '../../assets/Italian.jpg';
import coffee from '../../assets/coffee.png';
import pastry from '../../assets/pastry.jpg';

export default function Menu() {
  return (
    <div>
    <div className="bg-black text-white container py-5">
      <div className="menu-page mt-5">
        <span className="fs">Explore Menu</span>
        <span className="fs-7">Our Menu</span>
      </div>

      <div className="mt-5 d-flex justify-content-between align-items-center flex-wrap gap-4">
        <div className="menu-item">
          <img src={italian} alt="Italian" />
          <span className="center-bottom-text">
            <h3>Italian Dishes</h3>
            <p>View Menu</p>
          </span>
        </div>

        <div className="menu-item">
          <img src={pastry} alt="Pastry" />
          <span className="center-bottom-text">
            <h3>Pastry</h3>
            <p>View Menu</p>
          </span>
        </div>

        <div className="menu-item">
          <img src={coffee} alt="Coffee" />
          <span className="center-bottom-text">
            <h3>Coffee</h3>
            <p>View Menu</p>
          </span>
        </div>

      </div>
      <div className="text-center mt-5"> 
        <button className="btn1 ">
            View Menu <i className="bi bi-arrow-right"></i>
          </button>
        </div>
    </div>
      

    </div>
  );
}
